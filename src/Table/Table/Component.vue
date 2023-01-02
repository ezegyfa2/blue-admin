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
                type: Number
            },
            total_row_count: {
                type: Number
            },
            column_names: {
                type: Array
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
            }
        },
        data() {
            return {
                selectedPageNumber: 1,
                selectedRowToShowCount: 10,
                currentRows: [],
                columnNames: [],
                refreshDataEnabled: false,
                totalRowCount: 0
            }
        },
        mounted() {
            console.log(this.$options)
            this.refreshDataEnabled = true
            if (!this.currentRows || this.currentRows.length == 0) {
                this.refreshDataWithAjax()
            }
        },
        computed: {
            validatedSelectedPageNumber() {
                if (this.selectedPageNumber > this.pageCount) {
                    return this.pageCount
                }
                else {
                    return this.selectedPageNumber
                }
            },
            pageCount() {
                let pageCount = this.totalRowCount / this.selectedRowToShowCount
                let roundedPageCount = Math.floor(pageCount)
                if (pageCount == roundedPageCount) {
                    return roundedPageCount
                }
                else {
                    return roundedPageCount + 1
                }
            },
            description() {
                let startRowCount = (this.selectedPageNumber - 1) * this.selectedRowToShowCount + 1
                let endRowCount = this.selectedPageNumber * this.selectedRowToShowCount
                if (endRowCount > this.totalRowCount) {
                    endRowCount = this.totalRowCount
                }
                return "Showing " + startRowCount + " to " + endRowCount + " of " + this.totalRowCount + " entries"
            },
            queryLink() {
                let link = new URL(window.location)
                link.searchParams.set('page-number', this.selectedPageNumber)
                link.searchParams.set('row-count', this.selectedRowToShowCount)
                return link.toString()
            },
            createUrl() {
                return window.location.origin + window.location.pathname + '/create/'
            }
        },
        watch: {
            selected_row_to_show_count: {
                immediate: true,
                handler(newSelectedRowToShowCount, oldSelectedRowToShowCount) {
                    if (oldSelectedRowToShowCount != newSelectedRowToShowCount) {
                        this.selectedRowToShowCount = newSelectedRowToShowCount
                    }
                }
            },
            selectedRowToShowCount: {
                immediate: true,
                handler(newSelectedRowToShowCount, oldSelectedRowToShowCount) {
                    if (oldSelectedRowToShowCount != newSelectedRowToShowCount) {
                        this.selectedRowToShowCount = newSelectedRowToShowCount
                        this.refreshData()
                    }
                }
            },
            selected_page_number: {
                immediate: true,
                handler(newSelectedPageNumber, oldSelectedPageNumber) {
                    if (oldSelectedPageNumber != newSelectedPageNumber) {
                        this.selectedPageNumber = newSelectedPageNumber
                    }
                }
            },
            selectedPageNumber: {
                immediate: true,
                handler(newSelectedPageNumber, oldSelectedPageNumber) {
                    if (oldSelectedPageNumber != newSelectedPageNumber) {
                        this.selectedPageNumber = newSelectedPageNumber
                        this.refreshData()
                    }
                }
            },
            rows: {
                immediate: true,
                handler(newRows, oldRows) {
                    if (oldRows != newRows) {
                        this.currentRows = newRows
                    }
                }
            },
            column_names: {
                immediate: true,
                handler(newColumnNames, oldColumnNames) {
                    if (oldColumnNames != newColumnNames) {
                        this.columnNames = newColumnNames
                    }
                }
            },
            total_row_count: {
                immediate: true,
                handler(newTotalRowCount, oldTotalRowCount) {
                    if (oldTotalRowCount != newTotalRowCount) {
                        this.totalRowCount = newTotalRowCount
                    }
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
                if (this.refreshDataEnabled) {
                    if (this.redirect_enabled) {
                        let link = new URL(window.location)
                        link.searchParams.set('page-number', this.selectedPageNumber)
                        link.searchParams.set('row-count', this.selectedRowToShowCount)
                        window.location.href = link.toString()
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
                    $.ajax({
                        url: link.href
                    }).done(function(data) {
                        self.currentRows = data.rows,
                        self.columnNames = data.column_names
                        self.totalRowCount = data.total_row_count
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>