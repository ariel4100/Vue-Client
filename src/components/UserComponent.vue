<template>
  <div class="hello">
    <h1 class="text-center">USUARIOS</h1>
    <hr>
      <div class="row">
          <div class="col-md-3" v-for="item in allUser">
              <div class="card mt-2">
                  <div class="card-body">
                      <img :src="item.image" alt="" class="img-fluid rounded-circle p-2">
                      <hr>
                      <p class="lead text-center">{{ item.fullname }}</p>
                      <p class="text-justify">{{ item.about }}</p>
                      <button v-if="item" @click.prevent="addFriend(item)" class="btn btn-primary">agregar amigo</button>
                     <!-- <p v-if="item.status" class="lead">Amigo</p>
                      <p v-if="item.requester == item.id && item.user_requested != item.id" class="lead">solicitud enviada</p>
                      <p v-if="item.requester == item.id && !item.status" class="lead">comfirmar</p>--->
                  </div>
              </div>
          </div>
          <div class="col-md-12">
              <hr>
              <h1 class="text-center">pendientes</h1>
          </div>
          <div class="col-md-3" v-for="pendiente in allPending" :key="pendiente.id">
              <div class="card mt-2">
                  <div class="card-body">
                      <img :src="pendiente.image" alt="" class="img-fluid rounded-circle p-2">
                      <hr>
                      <p class="lead text-center">{{ pendiente.fullname }}</p>
                      <p class="text-justify">{{ pendiente.about }}</p>
                      <button v-if="pendiente.requester" class="btn btn-info disabled">solicitud enviado</button>
                  </div>
              </div>
          </div>
          <div class="col-md-12">
              <hr>
              <h1 class="text-center">confirmar</h1>
          </div>
          <div class="col-md-3" v-for="comfirmar in allConfirm">
              <div class="card mt-2">
                  <div class="card-body">
                      <img :src="comfirmar.image" alt="" class="img-fluid rounded-circle p-2">
                      <hr>
                      <p class="lead text-center">{{ comfirmar.fullname }}</p>
                      <p class="text-justify">{{ comfirmar.about }}</p>
                      <button v-if="!comfirmar.status" class="btn btn-success" @click.prevent="check(comfirmar)">confirmar solicitud</button>
                  </div>
              </div>
          </div>
          <div class="col-md-12">
              <hr>
              <h1 class="text-center">amigos</h1>
          </div>
          <div class="col-md-3" v-for="amigo in allFriend">
              <div class="card mt-2">
                  <div class="card-body">
                      <img :src="amigo.image" alt="" class="img-fluid rounded-circle p-2">
                      <hr>
                      <p class="lead text-center">{{ amigo.fullname }}</p>
                      <p class="text-justify">{{ amigo.about }}</p>
                      <button v-if="amigo.status" class="btn btn-success btn-block disabled">Amigos</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import axios from 'axios';

export default {
  name: 'UserComponent',
    data() {
        return {
            status: '',
            allUser: [],
            allPending: [],
            allConfirm: [],
            allFriend: [],
            post: {
                body: '',
            }
        }
    },
    created() {
        this.getUser();
    },
    methods: {
        getUser() {
            return axios.get('http://api-social.test/api/friendship',{headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }}).then(response => {
                console.log(response);
                this.allUser = response.data.users;
                this.allPending = response.data.pendiente;
                this.allConfirm = response.data.confirmar;
                this.allFriend = response.data.amigo;
                //this.status = response.data.requester;
                //this.postTotal = response.data.length;
            }).catch(err => console.error(err));
        },
        addFriend(friend) {
            return axios.post('http://api-social.test/api/friendship',friend,{headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }}).then(response => {
                //this.status = response.data;
                console.log(response);
                this.getUser();
            }).catch(err => console.error(err));
        },
        check(comfirmar) {
            return axios.post('http://api-social.test/api/amigo',comfirmar,{headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }}).then(response => {
                //this.status = response.data;
                console.log(response);
                this.getUser();
            }).catch(err => console.error(err));
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
