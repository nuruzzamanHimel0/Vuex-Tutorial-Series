export default {
    namespaced:true,
    state:{
        message: 'welcome to Cart page',
        products:[
            {id:1, name:"himel 1", price:200},
            {id:2, name:"himel 2", price:100},

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