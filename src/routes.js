import Dashboard from './components/Dashboard'
import NewEmployee from './components/NewEmployee'
import EditEmployee from './components/EditEmployee'
import ViewEmployee from './components/ViewEmployee'
import Login from './components/Login'
import Register from './components/Register'

 export default  [
    {
        path: '/', 
        name: 'dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login', 
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/register', 
        name: 'register',
        component: Register,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/new',
        name: 'new-employee',
        component: NewEmployee,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/edit/:employee_id', 
        name:'edit-employee',
        component: EditEmployee,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:employee_id', 
        name: 'view-employee',
        component: ViewEmployee,
        meta: {
            requiresAuth: true
        }
    },
]


