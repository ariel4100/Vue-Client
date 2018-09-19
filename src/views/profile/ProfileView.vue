<template>
    <default-layout>
        <section slot="content">
            <div class="row" v-for="item in profile" :key="item.id">
                <img :src="item['cover-image']" alt="" style="width: 100%; height: 400px; background: #999;">
                <div class="col-md-4" style="margin-top: -200px;">
                    <div class="card">
                        <img :src="item.image" alt="" class="img-fluid rounded-circle p-2">
                        <div class="card-body">
                            <h5 class="card-title text-center">{{ item.fullname }} {{ item.fullsurname }}</h5>
                            <p class="card-text"><b>Ciudad:</b> {{ item.city }}</p>
                            <p><b>Pais:</b> {{ item.country }}</p>
                            <b>Biografia:</b><p class="lead"> {{ item.about }}</p>
                            <p><small class="text-muted">{{ item.created_at }}</small></p>
                        </div>
                        <button @click.prevent="editProfile(item.id)" class="btn btn-dark">editar</button>
                    </div>
                </div>
                <div class="col-md-8">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a class="navbar-brand" href="#">ME</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <router-link to="/profile/publicaciones" class="nav-item nav-link active">Publicaciones</router-link>
                                <router-link to="/profile/comment" class="nav-item nav-link active mx-2">Comentarios</router-link>
                                <router-link to="/profile/likes" class="nav-item nav-link active">Me gustas</router-link>
                            </div>
                        </div>
                    </nav>
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </default-layout>
</template>

<script>
    import axios from 'axios'
    import DefaultLayout from '@/layouts/DefaultLayout';
    export default {
        name: 'ProfileView',
        props:['msg'],
        components:{
            DefaultLayout,
        },
        data(){
            return{
                profile: [],
            }
        },
        created(){
          this.getProfile();
        },
        methods:{
            getProfile() {
                return axios.get('http://api-social.test/api/profile',{headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }}).then(response => {
                        console.log(response);
                    //console.log(response.data.length);
                    this.profile = response.data;
                }).catch(err => console.error(err));
            },
            editProfile(post) {
                //console.log(post);
                return axios.put('http://api-social.test/api/profile/'+ post.id,{headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(response => {
                    console.log(response);
                    alert('editar perfil');
                    this.getPost();
                }).catch(response => console.log(response))
            },
        },
    }
</script>

<style>
a.nav-link.active{
    background: #fff;
    color: #111 !important;
}
</style>

