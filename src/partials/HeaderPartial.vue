<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">tu si puedes</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link :to="{name:'tuTeam'}" class="nav-link">Tu Team</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'myTeam'}" class="nav-link">My Team</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              tu nombre
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="">Action</a>
              <router-link :to="{ name: 'profile' }" class="dropdown-item">mi perfil</router-link>
              <div class="dropdown-divider"></div>
              <a href="" class="dropdown-item" @click.prevent="logout">cerrar sesion</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderPartial',

    methods: {
      logout(){
          localStorage.removeItem('token');
          alert('cerraste session');
          this.$router.push({name: 'login'})
      }
    }
}
</script>

<style>

</style>

