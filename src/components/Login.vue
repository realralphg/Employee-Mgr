<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel teal text-white center">
                        <div class="white-text"><h3>Login</h3></div>
                        <form>
                            <div class="input-field">
                                <i class="material-icons white-text prefix ">email</i>
                                <input type="text" id="email" v-model="email">
                                <label class="white-text" for="email">Email</label>
                            </div>

                            <div class="input-field">
                                <i class="material-icons white-text prefix">lock</i>
                                <input type="password" id="password" v-model="password">
                                <label class="white-text" for="password">Password</label>
                            </div>

                            <button class="btn btn-large grey lighten-4 black-text" @click="login">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
    name: 'login',

    data: () =>{
        return {
            email: null,
            password: null
        }
    },

    methods:{
        async login(e){
            try{
                await firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=>{
                    alert('You are logged in!')
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