<template>
  <div class="login_box">
    <el-form label-position="right" label-width="60px" :model="loginfrom">
      <el-form-item label="用户名">
        <el-input v-model="loginfrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginfrom.pew"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submituUserInfo(loginfrom)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
     loginfrom:{
      username:'',
      pew:'123456'
     }
    }
  },
  methods:{
     submituUserInfo(data){
        console.log(data);
         this.$store.dispatch('Logins',data).then(res => { 
          this.$router.push({ path: '/' });
        }).catch(() => {

        })
     }
  }
}
</script>

<style scoped>
.login_box{
    width: 280px;
    position: fixed;
    left: 39%;
    top: 200px;
    border: 1px solid skyblue;
    border-radius: 15px;
    padding: 38px 60px 5px 25px;
    text-align: center;
}
</style>
