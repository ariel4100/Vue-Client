<template>
    <div class="col-md-2 bg-dark" style="height: 100vh">
        <router-link :to="{name:'home'}" class="list row p-2" >Home</router-link>
        <router-link :to="{name:'trending'}" class="list row p-2" >Trending</router-link>
        <router-link :to="{name:'followers'}" class="list row p-2" >Followers</router-link>
        <hr>
        <router-link :to="{name:'team'}" class="list row p-2" >teams</router-link>
        <router-link to="/folder/b" class="list row p-2" >users</router-link>
    </div>
</template>

<script>
    export default {
        name: 'SidebarPartial',
    }
</script>

<style>
    .list{
        color: rgb(192, 188, 188);
    }
    .list:hover{
        background-color: rgb(255, 255, 255);
        color: rgb(5, 5, 5) !important;
        text-decoration: none;
    }

</style>

