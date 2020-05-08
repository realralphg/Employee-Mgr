<template>
    <nav class="nav-wrapper teal">
        <div >
            <router-link to="/"> <span class="brand"> EmployeeMgr</span> </router-link>
            <ul class="right">
                <li v-if="isLoggedIn"> <span> {{currentUser}}</span></li>
                <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
                <li v-if="isLoggedIn"><button class="btn black" @click="logout">Logout </button></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
    export default {
        created(){
            if(firebase.auth().currentUser){
                this.isLoggedIn = true
                this.currentUser = firebase.auth().currentUser.email
            }
        },

        data:()=>{
            return {
                isLoggedIn: false,
                currentUser: false
            }
        },

        methods:{
            logout(){
                firebase.auth().signOut()
                this.$router.go({path: this.$router.path})
            }
        }
    
    }
</script>

<style scoped>
.brand{
    text-align:left;
    font-weight: 700;
    font-size: large;
}

.nav-wrapper{
    padding-top : 10px 10px;
    padding-right : 10px;
    padding-left : 10px;
}

</style>