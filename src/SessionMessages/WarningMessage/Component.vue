<script>
    import MessageBox from '../MessageBox/Component.vue'

    export default {
        mixins: [
            MessageBox
        ],
        data() {
            return {
                messageClass: 'alert-warning'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>