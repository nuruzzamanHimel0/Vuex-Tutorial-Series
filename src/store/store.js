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
              return state.users.filter(user => user.age <40);
          }

      },
    mutations: {
        updateMessageMutation(state){
            state.msg =" Update Message"
        }
    },
    actions:{
        updateMessageActions(context){
            context.commit('updateMessageMutation');
        }
    },

});

export default store;
