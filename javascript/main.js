let prueba = [
   
]


const { createApp } = Vue

const app = createApp({
    data() {
        return {
            imgs: [
                {
                    displayIcon: "https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png",
                    name: "html"
                },
                {
                    displayIcon: "https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png",
                    name: "css"
                },
                {
                    displayIcon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                    name: "js"
                },
                {
                    displayIcon: "https://assets.stickpng.com/images/62a74f85223343fbc2207d05.png",
                    name: "vue"
                },
                {
                    displayIcon: "https://assets.stickpng.com/images/62a76468bd73a4af5c5d4fb7.png",
                    name: "bootstrap"
                }
            ],

        }
    },

    created() {
    },

    methods: {


    },

    computed: {

    }

}).mount('#app')