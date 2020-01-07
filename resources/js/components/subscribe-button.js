Vue.component('subscribe-button', {
    props: {
        subscriptions: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    computed: {
        subscribed(){
            if(! __auth()) return false
            return !!this.subscriptions.find(subscription => subscription.user_id == __auth().id)
        }
    },
    methods: {
        toggleSubscription(){
            if(! __auth()){
                alert("Please login to subscribe");
            }
        }
    }
});
