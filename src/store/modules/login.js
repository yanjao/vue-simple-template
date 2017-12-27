import { loginByUserInfo }from '../../api/login'
const login = {
  state: {
  	username:sessionStorage.getItem('USERNAME'),
  	role:sessionStorage.getItem('ROLE'),
  	introduce:'',
  	newrouter:[],
  },
  mutations: {
  	SET_USERNAME:(state, username) => {
  		state.username = username;
  	},
  	SET_ROLE:(state, role) => {
  		state.role = role;
  	},
  	SET_INTRODUCE:(state, introduce) =>{
  		state.introduce = introduce;
  	},
  	SET_NEWROUER:(state, newrouter) =>{
  		state.newrouter = newrouter;
  	},
  },
  actions: {
  	Logins({ commit }, info){
  		return new Promise((resolve, reject) => {
      		let data={};
      		loginByUserInfo.map(function (item) {
      			if(info.username === item.username || info.pew === item.pew){
      				commit('SET_USERNAME',item.username);
      				sessionStorage.setItem('USERNAME', item.username);
      				commit('SET_ROLE',item.role);
      				sessionStorage.setItem('ROLE', item.role);
      				return data={username:item.username,introduce:item.introduce};
      			}else{
      				return data;
      			}
            });  
  		    resolve(data);
        }).catch(error => {
            reject(error);
        });
  	},
  	Roles({ commit }, newrouter){
        return new Promise((resolve, reject) => {
      		commit('SET_NEWROUER',newrouter);
      		resolve(newrouter);
        }).catch(error => {
            reject(error);
        });
  	},
  	Logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        
          commit('SET_USERNAME','');
          commit('SET_ROLE','');
          commit('SET_NEWROUER',[]);
          location.reload();
          sessionStorage.removeItem('USERNAME');
          sessionStorage.removeItem('ROLE');
          resolve();
        }).catch(error => {
          reject(error);
        });
    },

  }
}
export default login;