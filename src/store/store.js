import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from "@/store/productsModule";
import cartModuls from "@/store/cartModuls";

Vue.use(Vuex)

  const store = new Vuex.Store({
      modules:{
        products: productsModule,
          cart: cartModuls,
      },
    state: {
        message:"Welcome to Normal store",
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
              return state.message;
          },
          getUsersAge(state){
              return state.users.filter(user => user.age >10);
          },
          usersCount(state){
              return state.users.length;
          }

      },
    mutations: {
        updateMessageMutation(state,payload){
            state.message =payload;
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
