<template>
  <div class="hello">
    <div class="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="" class="navbar-brand">IYF Arg</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarcollapse">
                <div class="form-inline ml-auto">
                  <div class="form-group">
                    <input type="email" v-model="login.email" class="form-control form-control-sm mx-2" placeholder="Email">
                    <input type="password" v-model="login.password" class="form-control form-control-sm mx-2" placeholder="Contraseña">
                  </div>
                  <a @click.prevent="LoginAuth" class="btn btn-outline-success">iniciar sesion</a>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
    import axios from 'axios';
export default {
  name: 'LoginComponent',
    data() {
        return {
            login: {
                email:'',
                password:'',
            }
        }
    },
    created() {
       
    },
    methods: {
        LoginAuth() {
            console.log(this.login);
            return axios.post('http://api-social.test/api/login',this.login).then(response => {
                console.log(response);
                localStorage.setItem('token',response.data.token);
                alert('ingresaste exitosamente');
                this.$router.push({name: 'home'});
            }).catch(response => console.log(response))
        },
    }
}
</script>

