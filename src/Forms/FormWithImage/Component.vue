<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            input_sections: {
                type: Array
            },
            main_button_section: {
                type: Object
            },
            secondary_button_sections: {
                type: Array
            },
            link_sections: {
                type: Array
            },
            image_url: {
                type: String
            }
        },
        computed: {
            imageStyle() {
                return 'background: url(' + this.image_url + ');background-position: center;background-size: cover;'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>