import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import DashboardVue from "@/pages/DashboardVue.vue";
import UsersVue from "@/pages/users/UsersVue.vue";
import RegisterVue from "@/pages/RegisterVue.vue";
import WrapperVue from "@/pages/WrapperVue.vue";
import loginVue from "@/pages/LoginVue.vue";
import UserCreate from "@/pages/users/UserCreate.vue";
import UserEdit from "@/pages/users/UserEdit.vue";
import RolesVue from "@/pages/roles/RolesVue.vue";
import RoleCreateVue from "@/pages/roles/RoleCreateVue.vue";
import RoleEditVue from "@/pages/roles/RoleEditVue.vue";
import ProductsVue from "@/pages/products/ProductsVue.vue";
import ProductCreateVue from "@/pages/products/ProductCreateVue.vue";
import productEditVue from "@/pages/products/ProductEditVue.vue";
import OrdersVue from "@/pages/orders/OrdersVue.vue";
import profileVue from "@/pages/ProfileVue.vue";


const routes: Array<RouteRecordRaw> = [
    {path: '/register', component: RegisterVue},
    {path: '/login', component: loginVue},

    {
        path: '',
        component: WrapperVue,
        children: [
            {path: '', component: DashboardVue},
            {path: '/users', component: UsersVue},
            {path: '/users/create', component: UserCreate},
            {path: '/users/:id/edit', component: UserEdit},
            {path: '/roles', component: RolesVue},
            {path: '/roles/create', component: RoleCreateVue},
            {path: '/roles/:id/edit', component: RoleEditVue},
            {path: '/products', component: ProductsVue},
            {path: '/products/create', component: ProductCreateVue},
            {path: '/products/:id/edit', component: productEditVue},
            {path: '/orders', component: OrdersVue},
            {path: '/profile', component: profileVue},

        ]
    },
    //{path: '', component: DashboardVue},
    //{path: '/users', component: UsersVue},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
