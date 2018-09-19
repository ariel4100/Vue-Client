<template>
  <div class="hello">
    <div class="card-deck">
      <div class="card mt-2">
        <div class="card-header">
          {{ msg }}
        </div>
          <div class="card-body row">
            <div class="col-md-2c">
              <img src="" alt="" class="img-thumbnail rounded-circle" style="background: red; padding: 2rem">
            </div>
            <div class="col-md-10">
              <div class="form-group">
                <textarea cols="10" rows="2" class="form-control" v-model="post.body" placeholder="Que estas haciendo ahora??"></textarea>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary float-right mb-2" @click.prevent="addPost">Publicar</button>
          </div>
      </div>
    </div>
    <p class="lead">PUBLICACIONES ({{ postTotal}})</p>
    <hr>
    <div class="card-deck" slot="postList" v-for="item in allPost" :key="item.id">
      <div class="card mt-2">
        <div class="card-body">
          <div class="row">
            <div class="col-md-2x">
              <img src="" alt="" class="img-thumbnail rounded-circle" style="background: red; padding: 2rem">
            </div>
            <div class="col-md-9" style="margin: 0 !important;">
              <b class="text-muted">{{ item.created_at}}</b>
              <p class="text-capitalize">{{ item.body}}</p>
            </div>
            <div class="col-md-1 ml-auto">
              <button class="btn btn-info btn-sm">!!</button>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <a href="" class="btn btn-outline-info btn-sm">like</a>
          <a href="" class="btn btn-outline-success btn-sm">comentar</a>
          <button @click.prevent="unPost(item)" class="btn btn-outline-dark btn-sm">eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

export default {
  name: 'PostComponent',
    data() {
        return {
            msg: 'Welcome to Your App RED SOCIAL',
            postTotal: '',
            allPost: [],
            post: {
                body: '',
            }
        }
    },
    created() {
        this.getPost();
    },
    methods: {
        getPost() {
            return axios.get('http://api-social.test/api/post',{headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }}).then(response => {
                console.log(response.data.length);
                this.allPost = response.data.post;
                this.postTotal = response.data.length;
            }).catch(err => console.error(err));
        },
        addPost() {
            //console.log(this.post);
            return axios.post('http://api-social.test/api/post',this.post,{  headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }}).then(response => {
                console.log(response);
                //this.post = '';
                this.getPost();
            })
        },
        unPost(post) {
            //console.log(post);
            return axios.delete('http://api-social.test/api/post/'+ post.id,{headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(response => {
                console.log(response);
                alert('post eliminado');
                this.getPost();
            }).catch(response => console.log(response))
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
