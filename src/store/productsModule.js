export default {
    namespaced:true,
    state:{
        message: 'welcome to product page',
        products:[
            {id:1, name:"iphon 1", price:200},
            {id:2, name:"iphon 2", price:100},
            {id:3, name:"iphon 3", price:300},
            {id:4, name:"iphon 4", price:400},
        ]
    },
    getters:{
        countProduct(state){
            return state.products.length;
        },
        getProducts(state){
            return state.products;
        }
    },
    mutations:{
        addproductmution(state,payLoad){
            state.products.push(payLoad);
        }
    },
    actions:{
        addProductAction(context,data){
            context.commit('addproductmution',data);
        }
    },

}