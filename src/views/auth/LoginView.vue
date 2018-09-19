<template>
    <div class="menu">
      <login-component></login-component>
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-5">
                    <p class="display-4">tenes un Sueño???</p>
                    <hr>
                    <p class="lead">Hacelo realidad, en esta plataforma encotraras diversos talentos en la cual personas como tu lograron cumplirlas.</p>
                    <h2><b class="text-info">No Te Rindas!!!</b></h2>
                </div>
                <div class="col-md-6 mt-5">
                    <h2 class="text-center">Registrate!! Es Gratis</h2>
                    <register-component class="bg-dark p-4 text-white"></register-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RegisterComponent from '@/components/RegisterComponent'
import LoginComponent from '@/components/LoginComponent'
export default {
    name: 'LoginView',
    components:{
        RegisterComponent,
        LoginComponent
    }
}
</script>

<style>

</style>
