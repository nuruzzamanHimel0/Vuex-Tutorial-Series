export default {
    namespaced:true,
    state:{
        message: 'welcome to Cart page',
        cart:[
            {id:1, name:"himel 1", price:200},
            {id:2, name:"himel 2", price:100},

        ]
    },
    getters:{
        countcart(state){
            return state.cart.length;
        },
        getcarts(state){
            return state.cart;
        }
    },
    mutations:{
        addCartMut(state,payLoad){
            state.cart.push(payLoad);
        }
    },
    actions:{
        addCartAction(context,data){
            context.commit('addCartMut',data);
        }
    },

}