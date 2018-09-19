<template>
  <div class="">
    <form v-if="!ver">
      <div class="form-group">
        <label>nombre del team</label>
        <input type="text" v-model="team.name" class="form-control">
      </div>
      <div class="form-group">
        <label>descripcion</label>
        <input type="text" v-model="team.description" class="form-control">
      </div>
      <div class="form-group">
        <label>estado</label>
        <input type="text" v-model="team.status" class="form-control">
      </div>
      <button @click.prevent="addTeam" class="btn btn-danger">crear team</button>
    </form>
    <hr>
    <div class="row">
      <div class="col-md-3" v-for="team in allTeam">
        <div class="card">
          <router-link :to="{name: 'teams', params: { teamName: team.slug, team}}" class="nav-link">
            <img src="http://img2.sbs.co.kr/img/sbs_cms/WE/2018/08/13/WE15324892_ori.jpg" alt="" class="card-img-top">
            <div class="card-body">
              <hr>
              <h3 class="text-center">{{ team.name }}</h3>
              <p class="lead text-center">"{{ team.description }}"</p>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {getTeam} from '@/services/TeamService';
export default {
  name: 'TeamComponent',
    data () {
      return {
          allTeam:[],
          ver: false,
          team:{
              name:'',
              description:'',
              status:'',
          },
          msg: 'Carpetas de DREAM'
      }
    },
    created(){
      this.showTeam();
    },
    methods:{
        showTeam() {
             getTeam().then(response => {
                console.log(response);
                 this.ver = response.data.myteam;
                 this.allTeam = response.data.team;
                //this.postTotal = response.data.length;
            }).catch(err => console.error(err));
        },
        addTeam(){
            //console.log(team);
            return axios.post('http://api-social.test/api/team',this.team,{  headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }}).then(response => {
                console.log(response);
                //this.post = '';
                this.getTeam();
            })
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
