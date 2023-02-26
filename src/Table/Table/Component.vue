<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            row_to_show_counts: {
                type: Array
            },
            selected_row_to_show_count: {
                type: Number,
                default: 10
            },
            total_row_count: {
                type: Number
            },
            column_names: {
                type: Array,
                default() {
                    return []
                }
            },
            rows: {
                type: Array
            },
            selected_page_number: {
                type: Number
            },
            redirect_enabled: {
                type: Boolean,
                default: false
            },
            filter_sections: {
                type: Array,
                default() {
                    return []
                }
            },
            filter_form_item_type_prefix: {
                type: String
            }
        },
        data() {
            return {
                currentRows: [],
                refreshDataEnabled: false,
                redirected: false,
                dataRefresher: new Waiter(500),
                dataTransmits: {
                    currentRows: 'rows',
                }
            }
        },
        mounted() {
            this.refreshDataEnabled = true
            if (!this.currentRows || this.currentRows.length == 0) {
                this.refreshDataWithAjax()
            }
        },
        computed: {
            pageCount() {
                let pageCount = this.total_row_count / this.selected_row_to_show_count
                let roundedPageCount = Math.floor(pageCount)
                if (pageCount == roundedPageCount) {
                    return roundedPageCount
                }
                else {
                    return roundedPageCount + 1
                }
            },
            description() {
                let startRowCount = (this.selected_page_number - 1) * this.selected_row_to_show_count + 1
                if (startRowCount > this.total_row_count) {
                    startRowCount = this.total_row_count
                }
                let endRowCount = this.selected_page_number * this.selected_row_to_show_count
                if (endRowCount > this.total_row_count) {
                    endRowCount = this.total_row_count
                }
                return "Showing " + startRowCount + " to " + endRowCount + " of " + this.total_row_count + " entries"
            },
            queryLink() {
                let link = new URL(window.location)
                link.searchParams.set('page-number', this.selected_page_number)
                link.searchParams.set('row-count', this.selected_row_to_show_count)
                return link.toString()
            },
            createUrl() {
                return window.location.origin + window.location.pathname + '/create/'
            },
            pageNumberUrlParam() {
                return parseInt(new URL(window.location).searchParams.get('page-number'))
            },
            rowToShowCountUrlParam() {
                return parseInt(new URL(window.location).searchParams.get('row-count'))
            },
            refreshInputData() {
                return {
                    'page-number': this.selected_page_number, 
                    'row-count': this.selected_row_to_show_count,
                    'filter-data': this.filterData,
                    '_token': document.querySelector('meta[name="csrf-token"]').content
                }
            },
            filterData() {
                let filterSectionsData = {}
                this.filter_sections.forEach((filterSection) => {
                    let filterData = {
                        name: filterSection.data.name,
                    }
                    if (typeof filterSection.data.value !== 'undefined' && filterSection.data.value !== null) {
                        if (filterSection.data.value && typeof filterSection.data.value == 'object') {
                            if (typeof filterSection.data.value.value !== 'undefined' && filterSection.data.value.value !== null) {
                                filterData.value = filterSection.data.value.value
                            }
                        }
                        else {
                            filterData.value = filterSection.data.value
                        }
                    } 
                    if (typeof filterSection.data.from_value !== 'undefined' && filterSection.data.from_value !== null) {
                        filterData.from_value = filterSection.data.from_value
                    } 
                    if (typeof filterSection.data.to_value !== 'undefined' && filterSection.data.to_value !== null) {
                        filterData.to_value = filterSection.data.to_value
                    } 
                    filterSectionsData[filterSection.data.name] = filterData
                })
                return filterSectionsData
            },
            token() {
                return document.querySelector('meta[name="csrf-token"]').content
            }
        },
        watch: {
            selected_row_to_show_count: {
                handler(newSelectedRowToShowCount, oldSelectedRowToShowCount) {
                    if (typeof newSelectedRowToShowCount !== 'undefined' && newSelectedRowToShowCount !== null && newSelectedRowToShowCount != oldSelectedRowToShowCount 
                        && (!this.redirect_enabled || newSelectedRowToShowCount != this.rowToShowCountUrlParam)) {
                            if (this.selected_page_number == 1) {
                                this.refreshData()
                            }
                            else {
                                this.$emit('update:selected_page_number', 1)
                            }
                    }
                }
            },
            selectedPageNumber: {
                handler(newSelectedPageNumber, oldSelectedPageNumber) {
                    console.log('selectedPageNumber ' + newSelectedPageNumber)
                    this.$nextTick(() => {
                        if (typeof newSelectedPageNumber !== 'undefined' && newSelectedPageNumber !== null && (!this.redirect_enabled || (newSelectedPageNumber != this.pageNumberUrlParam))) {
                            this.refreshData()
                        }
                    })
                }
            }
        },
        methods: {
            activePageClass(pageNumber) {
                if (pageNumber == this.selected_page_number) {
                    return 'active unclickable'
                }
                else {
                    return ''
                }
            },
            refreshData() {
                if (this.refreshDataEnabled && this.selected_row_to_show_count && this.selected_page_number) {
                    if (this.redirect_enabled) {
                        if (!this.redirected) {
                            this.redirected = true
                            $.redirect(window.location.href, this.refreshInputData)
                        }
                    }
                    else {
                        this.refreshDataWithAjax()
                    }
                }
            },
            refreshDataWithAjax() {
                if (this.refreshDataEnabled) {
                    this.dataRefresher.resetAndExecute(() => {
                        let link = new URL(window.location)
                        link.pathname += '/get-data'
                        let self = this
                        $.post({
                            url: link.href,
                            data: this.refreshInputData
                        }).done(function(data) {
                            console.log(JSON.parse(JSON.stringify(data.filter_sections)))
                            self.currentRows = data.rows
                        this.$emit('update:column_names', data.column_names)
                        this.$emit('update:total_row_count', data.total_row_count)
                        this.$emit('update:filter_sections', data.filter_sections)
                        })
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>