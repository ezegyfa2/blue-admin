<script>
    import MessageBox from '../MessageBox/Component.vue'

    export default {
        mixins: [
            MessageBox
        ],
        data() {
            return {
                messageClass: 'alert-primary'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>