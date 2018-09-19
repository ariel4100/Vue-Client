<template>
    <default-layout>
        <section slot="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Aca va estar las publicaciones de tendencias</h1>
                    </div>
                </div>
            </div>
        </section>
    </default-layout>

</template>

<script>
    import DefaultLayout from '@/layouts/DefaultLayout'
    export default {
        name: 'TrendingView',
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

