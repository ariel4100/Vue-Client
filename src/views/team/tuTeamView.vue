<template>
    <default-layout>
        <section slot="content">
            <div class="row">
                <div class="col-md-4 text-center">
                    <h1>{{myteam.name}}</h1>
                    <p>{{myteam.description}}</p>
                    <button class="btn btn-dark">eliminar team</button>
                    <hr>
                    <h1>miembros</h1>
                    <div class="border border-dark p-2" v-for="member in members">
                        <h5>{{member.fullname}} {{member.fullsurname}}</h5>
                        <p>{{member.email}}</p>
                    </div>
                </div>
                <div class="col-md-4">

                </div>
                <div class="col-md-4">
                    <h2>solicitudes para unirse</h2>
                    <div class="border border-dark p-2" v-for="member in mymembers">
                        <h5>{{member.fullname}} {{member.fullsurname}}</h5>
                        <p>{{member.email}}</p>
                        <button @click.prevent="belongToTeam(member)" class="btn btn-primary">comfirmar</button>
                    </div>
                </div>
            </div>
        </section>
    </default-layout>
</template>

<script>
    import TeamComponent from '@/components/TeamComponent';
    import {tuTeam,joinTeam} from '@/services/TeamService';
    import DefaultLayout from '@/layouts/DefaultLayout';
    export default {
        name: 'TeamView',
        components:{
            DefaultLayout,
            TeamComponent
        },
        data() {
            return {
                myteam: [],
                mymembers:[],
                members:[],

            }
        },
        created(){
            this.getTeam();
        },
        methods:{
            getTeam(){
                tuTeam().then(response =>{
                    console.log(response);
                    this.myteam = response.data.tuteam;
                    this.mymembers = response.data.mymembers;
                    this.members = response.data.members;
                })
            },
            belongToTeam(member){
                //console.log(team);
                joinTeam(member).then(response =>{
                    console.log(response);
                    this.getTeam();
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
