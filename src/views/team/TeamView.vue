<template>
    <default-layout>
        <section slot="content">
            <div class="row">
                <div class="col-md-12">
                    <team-component></team-component>
                </div>
            </div>
        </section>
    </default-layout>
</template>

<script>
    import TeamComponent from '@/components/TeamComponent';
    import {getTeam} from '@/services/TeamService';
    import DefaultLayout from '@/layouts/DefaultLayout';
    export default {
        name: 'TeamView',
        components:{
          DefaultLayout,
            TeamComponent
        },
        data() {
            return {
                msg: 'Welcome to Your App RED SOCIAL',
                postTotal: '',
                team: [],
                allPost: [],
                post: {
                    body: '',
                }
            }
        },

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
