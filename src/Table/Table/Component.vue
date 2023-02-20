<template lang="pug">
    include Template.pug
</template>

<script>
    import DataTransmitting from '../../../../helper-vue-components/src/DataTransmitting.vue'

    export default {
        mixins: [
            DataTransmitting,
        ],
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
                default: true
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
                selectedPageNumber: 1,
                currentRows: [],
                columnNames: [],
                refreshDataEnabled: false,
                totalRowCount: 0,
                filterSections: [],
                filterFormItemTypePrefix: null,
                dataTransmits: {
                    selectedPageNumber: 'selected_page_number',
                    currentRows: 'rows',
                    columnNames: 'column_names',
                    totalRowCount: 'total_row_count',
                    filterSections: 'filter_sections',
                    filterFormItemTypePrefix: 'filter_form_item_type_prefix'
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
                let pageCount = this.totalRowCount / this.selected_row_to_show_count
                let roundedPageCount = Math.floor(pageCount)
                if (pageCount == roundedPageCount) {
                    return roundedPageCount
                }
                else {
                    return roundedPageCount + 1
                }
            },
            description() {
                let startRowCount = (this.selectedPageNumber - 1) * this.selected_row_to_show_count + 1
                if (startRowCount > this.totalRowCount) {
                    startRowCount = this.totalRowCount
                }
                let endRowCount = this.selectedPageNumber * this.selected_row_to_show_count
                if (endRowCount > this.totalRowCount) {
                    endRowCount = this.totalRowCount
                }
                return "Showing " + startRowCount + " to " + endRowCount + " of " + this.totalRowCount + " entries"
            },
            queryLink() {
                let link = new URL(window.location)
                link.searchParams.set('page-number', this.selectedPageNumber)
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
                    'page-number': this.selectedPageNumber, 
                    'row-count': this.selected_row_to_show_count,
                    'filter-data': this.filterData,
                    '_token': document.querySelector('meta[name="csrf-token"]').content
                }
            },
            filterData() {
                let filterSectionsData = {}
                this.filterSections.forEach((filterSection) => {
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
                    console.log('sdf')
                    if (typeof newSelectedRowToShowCount !== 'undefined' && newSelectedRowToShowCount !== null && newSelectedRowToShowCount != oldSelectedRowToShowCount 
                        && (!this.redirect_enabled || newSelectedRowToShowCount != this.rowToShowCountUrlParam)) {
                            if (this.selectedPageNumber == 1) {
                                this.refreshData()
                            }
                            else {
                                this.selectedPageNumber = 1
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
                if (pageNumber == this.selectedPageNumber) {
                    return 'active unclickable'
                }
                else {
                    return ''
                }
            },
            refreshData() {
                if (this.refreshDataEnabled && this.selected_row_to_show_count && this.selectedPageNumber) {
                    if (this.redirect_enabled) {
                        $.redirect(window.location.href, this.refreshInputData)
                    }
                    else {
                        this.refreshDataWithAjax()
                    }
                }
            },
            refreshDataWithAjax() {
                if (this.refreshDataEnabled) {
                    let link = new URL(window.location)
                    link.pathname += '/get-data'
                    let self = this
                    $.post({
                        url: link.href,
                        data: this.refreshInputData
                    }).done(function(data) {
                        console.log(data.filter_sections)
                        self.currentRows = data.rows
                        self.columnNames = data.column_names
                        self.totalRowCount = data.total_row_count
                        self.filterSections = data.filter_sections
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>