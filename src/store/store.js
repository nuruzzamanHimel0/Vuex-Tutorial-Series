import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

  const store = new Vuex.Store({
    state: {
        msg:"My name is himel",
        users:[
            {
                'id':1,"name":"himel","age":40
            },{
                "id":2,"name":"toam;",'age':20
            }
        ]
    },
      getters:{
          updateMessageGetters(state){
              return state.msg;
          },
          getUsersAge(state){
              return state.users.filter(user => user.age >10);
          }

      },
    mutations: {
        updateMessageMutation(state,payload){
            state.msg =payload;
        },
        addUsers(state, payLoad){
            state.users.push(payLoad);
        }
    },
    actions:{
        updateMessageActions(context,data){
            context.commit('updateMessageMutation',data);
        }
    },

});

export default store;
