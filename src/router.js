import Vue from 'vue'
import Router from 'vue-router'
import ProductList from './views/ProductList.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Product List',
            component: ProductList
        },
        {
            path: '/cart',
            name: 'shopping-cart',
            component: () =>
                import ('./views/ShoppingCart.vue')
        }
    ]
})