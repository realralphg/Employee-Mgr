import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import firebase from 'firebase/app'
import 'firebase/auth'


Vue.use(VueRouter);
const router = new VueRouter({

routes: Routes
})

Vue.config.productionTip = false



//Coding the Guards NOW!

router.beforeEach((to, from, next) => {
  //Check for requiresAuth Guard
  if(to.matched.some(record => record.meta.requiresAuth)){
      //Check if NOT logged In
      if(!firebase.auth().currentUser){
          //Go to Login
          next('/login')
      }else{
          //proceed to route
          next()
      }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
      //Check if logged In
      if(firebase.auth().currentUser){
          // Go to Dashboard
          next('/')
      }else{
          // Proceed to route
          next()
      }
  }
})

// Always Check for Authentication first
// When you refresh, THIS keeps you on page

let app
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
  }
})

