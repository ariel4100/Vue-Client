<template>
    <default-layout>
        <section slot="content">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1>{{Showteam.name}}</h1>
                    <p>{{Showteam.description}}</p>
                    <button class="btn btn-warning">seguir</button>
                    <button @click.prevent="belongToTeam(Showteam)" class="btn btn-dark">unirse al team</button>
                </div>
            </div>
        </section>
    </default-layout>
</template>

<script>
    import TeamComponent from '@/components/TeamComponent';
    import {myTeam,joinTeam} from '@/services/TeamService';
    import DefaultLayout from '@/layouts/DefaultLayout';
    export default {
        name: 'TeamView',
        components:{
            DefaultLayout,
            TeamComponent
        },
        data() {
            return {
                Showteam: [],
            }
        },
        created(){
            this.getTeam();
        },
        methods:{
            getTeam(){
                let team = this.$route.params.team;
                this.Showteam = team;
            },
            belongToTeam(team){
                //console.log(team);
                joinTeam(team).then(response =>{
                    console.log(response);
                });

            }
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
