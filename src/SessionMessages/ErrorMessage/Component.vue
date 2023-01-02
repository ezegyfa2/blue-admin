<script>
    import MessageBox from '../MessageBox/Component.vue'

    export default {
        mixins: [
            MessageBox
        ],
        data() {
            return {
                messageClass: 'alert-danger'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>