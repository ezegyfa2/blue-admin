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
            selected_row_to_show_counts: {
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
            }
        },
        data() {
            return {
                selectedPageNumber: 0,
                selectedRowToShowCount: 10,
            }
        },
        mounted() {
            if (this.selected_page_number) {
                this.selectedPageNumber = this.selected_page_number
            }
            if (this.selected_row_to_show_counts && this.row_to_show_counts.includes(this.selected_row_to_show_counts)) {
                this.selectedRowToShowCount = this.selected_row_to_show_counts
            }
            else if (this.row_to_show_counts.length > 0) {
                this.selectedRowToShowCount = this.row_to_show_counts[0]
            }
        },
        computed: {
            pageCount() {
                let pageCount = this.total_row_count / this.selectedRowToShowCount
                let roundedPageCount = Math.floor(pageCount)
                if (pageCount == roundedPageCount) {
                    return roundedPageCount
                }
                else {
                    return roundedPageCount + 1
                }
            },
            previousDisabledClass() {
                if (this.selectedPageNumber == 1) {
                    return 'disabled'
                }
                else {
                    return ''
                }
            },
            nextDisabledClass() {
                if (this.selectedPageNumber == this.page_count) {
                    return 'disabled'
                }
                else {
                    return ''
                }
            },
            description() {
                let startRowCount = (this.selectedPageNumber - 1) * this.selectedRowToShowCount
                let endRowCount = this.selectedPageNumber * this.selectedRowToShowCount
                if (endRowCount > this.total_row_count) {
                    endRowCount = this.total_row_count
                }
                return "Showing " + startRowCount + " to " + endRowCount + " of " + this.total_row_count + " entries"
            },
            queryLink() {
                let link = new URL(window.location)
                link.searchParams.set('page', this.selectedPageNumber)
                link.searchParams.set('row-count', this.selectedRowToShowCount)
                return link
            }
        },
        watch: {
            selectedRowToShowCount: {
                immediate: true,
                handler(newSelectedRowToShowCount, oldSelectedRowToShowCount) {
                    if (oldSelectedRowToShowCount && oldSelectedRowToShowCount != 0) {
                        this.selectedRowToShowCount = newSelectedRowToShowCount
                        this.refreshPage()
                    }
                }
            }
        },
        methods: {
            activePageClass(pageNumber) {
                if (pageNumber == this.selectedPageNumber) {
                    return 'active'
                }
                else {
                    return ''
                }
            },
            refreshPage() {
                console.log(this.queryLink)
                window.location.replace(this.queryLink.href)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>