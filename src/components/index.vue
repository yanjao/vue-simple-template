<template>
  <el-container>
    <el-header class='header'>
      <el-row>
        <el-col :span="23">
          <el-menu :default-active="$route.path" mode="horizontal" class="nav_box" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
          	<template v-for="item in newrouter[0].children" v-if="!item.hidden">
          		<router-link v-if="!item.hidden&&!item.children" :to="item.path">
          	       <el-menu-item :index="item.path" >
                    {{ item.name}}
                   </el-menu-item>
               </router-link>
            </template>
          </el-menu>
        </el-col>
        <el-col :span="1"> 
          <div class="logout_box" @click="logout()">退出</div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view class="view"></router-view>
   </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'index',
  data () {
    return {
     
    }
  },
  computed: {
    ...mapGetters([
        'newrouter'
    ])
  },
  methods: {
    logout(){
    	this.$store.dispatch('Logout').then(() => {
            this.$router.push({ path: '/login' });
        }).catch(err => {
            this.$message.error(err);
        });
    }
  },
  mounted(){
  
  }
}
</script>

<style scoped>
.header{
	padding: 0px;
}
.nav_box{
	border-bottom: 0px;
}
.logout_box{
	background-color: #545c64;
	line-height: 60px;
    width: 100%;
    color:#fff;
}
</style>