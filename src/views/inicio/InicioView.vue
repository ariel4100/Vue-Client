<template>
    <default-layout>
        <section slot="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        aca va estar la publicidad
                    </div>
                    <div class="col-md-12">
                        <p>
                            aca los post mas recomendados de los equipos
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </default-layout>

</template>

<script>
    import DefaultLayout from '@/layouts/DefaultLayout'
    export default {
        name: 'InicioView',
        components:{
            DefaultLayout
        }
    }
</script>

<style>
    .col-md-12 a .row:hover{
        background-color: #555;
    }
</style>

