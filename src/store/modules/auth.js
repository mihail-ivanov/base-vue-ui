
import axios from 'axios';

export default {
  state: {
    jwt: localStorage.getItem('token'),
    endpoints: {
      obtainJWT: process.env.VUE_APP_BASE_URL + 'ui/auth/obtain_token/',
      refreshJWT: process.env.VUE_APP_BASE_URL + 'ui/auth/refresh_token/'
    }
  },
  mutations: {
    updateToken(state, newToken){
      localStorage.setItem('token', newToken);
      state.jwt = newToken;
    },
    removeToken(state){
      localStorage.removeItem('token');
      state.jwt = null;
    }
  },
  actions: {
    obtainToken({commit}, data){
      const payload = {
        email: data.email,
        password: data.password
      }
      axios.post(this.state.auth.endpoints.obtainJWT, payload)
        .then((response)=>{
            commit('updateToken', response.data.token);
            location.replace("/");
          })
        .catch((error)=>{
            console.log(error);
          })
    },
    refreshToken({commit}){
      const payload = {
        token: this.state.auth.jwt
      }
      axios.post(this.state.auth.endpoints.refreshJWT, payload)
        .then((response)=>{
          if (Object.prototype.hasOwnProperty.call(response.data, 'status') && response.data.status == 'nok') {
            location.replace("/auth/login")
          }
          else if (Object.prototype.hasOwnProperty.call(response.data, 'token')) {
            commit('updateToken', response.data.token);
          } else {
            location.replace("/auth/login")
          }
        })
        .catch(()=>{
          location.replace("/auth/login")
        })
    },
    signOut({commit}) {
      commit('removeToken');
    }
  }
};
