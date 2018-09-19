<template>
  <div class="hello">
    <form class="form-row">
      <div class="form-group col-md-6">
        <label for="">Nombre completo</label>
        <input type="text" v-model="register.name" class="form-control">
      </div>
      <div class="form-group col-md-6">
        <label for="">Apellido completo</label>
        <input type="text" v-model="register.surname" class="form-control">
      </div>
      <div class="form-group col-md-12">
        <label for="">Email</label>
        <input type="email" v-model="register.email" class="form-control">
      </div>
      <div class="form-group col-md-12">
        <label for="">Contraseña</label>
        <input type="password" v-model="register.password" class="form-control">
      </div>
       <div class="form-group col-md-12">
        <label for="">Genero</label>
          <select class="custom-select" v-model="register.gender">
            <option>Hombre</option>
            <option>Mujer</option>
          </select>
      </div>
      <a @click.prevent="Register" class="btn btn-primary">Registrar</a>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RegisterComponent',
    data() {
        return {
            register: {
                name: '',
                surname:'',
                gender: '',
                email:'',
                password:'',
            }
        }
    },
    created() {
       
    },
    methods: {
        Register() {
            console.log(this.register);
            return axios.post('http://api-social.test/api/register',this.register).then(response => {
                console.log(response);
                alert('registrado con exito');
                this.users = '';
            }).catch(response => console.log(response))
        },
    }
}
</script>

