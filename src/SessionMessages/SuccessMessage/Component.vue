<script>
    import MessageBox from '../MessageBox/Component.vue'

    export default {
        mixins: [
            MessageBox
        ],
        data() {
            return {
                messageClass: 'alert-success'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>