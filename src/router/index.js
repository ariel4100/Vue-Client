import Vue from 'vue'
import Router from 'vue-router'
// VIEWS
import ProfileView from '@/views/profile/ProfileView'
import FollowersView from '@/views/followers/FollowersView'
import TrendingView from '@/views/trending/TrendingView'
import InicioView from '@/views/inicio/InicioView'
import LoginView from '@/views/auth/LoginView'
import TeamView from '@/views/team/TeamView'
import tuTeamView from '@/views/team/tuTeamView'
import myTeamView from '@/views/team/myTeamView'
import ShowTeam from '@/views/team/ShowTeam'
// COMPONENTS
import UserComponent from '@/components/UserComponent'
import PostComponent from '@/components/PostComponent'
import TeamComponent from '@/components/TeamComponent'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', name: 'login', component: LoginView, meta: {guest: true} },

    /*{ path: '/profile', name: 'profile', component: ProfileView, meta: {auth: true}, children:[
        { path: 'publicaciones', component: PostComponent},
        { path: 'comment', component: c},
        { path: 'likes', component: l},
    ]},*/
      { path: '/', name: 'home', component: InicioView, meta: {auth: true}},
      { path: '/tendencia', name: 'trending', component: TrendingView, meta: {auth: true}},
      { path: '/seguidores', name: 'followers', component: FollowersView, meta: {auth: true}},
      { path: '/equipo', name: 'team', component: TeamView, meta: {auth: true}},
      { path: '/my-team', name: 'myTeam', component: myTeamView, meta: {auth: true}},
      { path: '/tu-team', name: 'tuTeam', component: tuTeamView, meta: {auth: true}},
      { path: '/perfil', name: 'profile', component: ProfileView, meta: {auth: true}},
    /*{ path: '/home', name: 'home', component: HomeView, meta: {auth: true}, children:[
        { path: 'a', component: TeamComponent},
        { path: 'b', components: {b: UserComponent}}
    ]},*/
      { path: '/team/:teamName', name: 'teams', component: ShowTeam, meta: {auth: true} },
  ]
})
router.beforeEach((to, from, next) => {
    //console.log(to.path);
    let token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.auth)) {
        if(token == null)
        {
            redirect('/login')
        }else{
            next();
        }
    } else if(to.matched.some(record => record.meta.guest))
    {
        if(token == null)
        {
            next();
        }else{
            next({name: 'home'});
        }
    }
});

router.afterEach((to, from, next) => {
    let token = localStorage.getItem('token');
    if(token == null || token == '')
    {
        redirect('/login')
    }else{
        next();
    }
});
export default router

