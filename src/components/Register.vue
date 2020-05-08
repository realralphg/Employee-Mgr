<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel grey lighten-4 text-white center">
                        <div>
                            <h3>Register</h3></div>
                        <form>
                            <div class="input-field">
                                <i class="material-icons prefix ">email</i>
                                <input type="text" id="email" v-model="email">
                                <label  for="email">Email</label>
                            </div>

                            <div class="input-field">
                                <i class="material-icons  prefix">lock</i>
                                <input type="password" id="password" v-model="password">
                                <label  for="password">Password</label>
                            </div>

                            <button class="btn btn-large grey lighten-4 black-text" @click="register">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'


export default {
    name: 'register',

    data: () =>{
        return {
            email: null,
            password: null
        }
    },

    methods:{
        async register(e){
            try{
                await firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(()=>{
                    alert('Account created!')
                    this.$router.push('/')
                })
            }catch(err){
                alert(err.message)
            }

            e.preventDefault();
        }
    }
}
</script>