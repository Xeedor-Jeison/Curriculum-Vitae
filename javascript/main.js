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
                    displayIcon: "../imagenes/vue_js.png",
                    name: "vue"
                },
                {
                    displayIcon: "../imagenes/bootstrap.png",
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