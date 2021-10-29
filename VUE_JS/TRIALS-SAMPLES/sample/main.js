Vue.component('product-review', {
    template: `
    <input v-model="name">
    `,
    data() {

        return {
            name: null,

        }
    }
})


var app = new Vue({
    el: '#app',
    data: {
        brand: "Vue Shoes",
        product: 'Nike Air 2',
        image: './images/download.jpg',
        link: 'https://www.google.com',
        //inStock:false,
        inventory: 0,
        onSale: true,
        inStock: true,
        details: [
            "80% cotton",
            "20% polyster",
            "gender-neutral"
        ],
        variants: [{
                variantid: 2214,
                variantColor: "green",
                variantImage: "./images/green.jpg"
            },
            {
                variantId: 2213,
                variantColor: "blue",
                variantImage: "./images/blue.jpg"

            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        myCart: 0,
        cart: 0

    },
    methods: {
        addToCart() { //addCart (){     shorcot
            this.cart += 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        }
    }

})