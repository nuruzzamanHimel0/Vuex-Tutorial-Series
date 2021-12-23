<template>
  <div class="hello">
    <h1>{{ pmessage }} Number of product = {{productcount}}</h1>

    <h1>{{ cmessage }} Number of product = {{catCount}}</h1>

<!--    <button @click.prevent="updateMessageActions('Update hye jao hala')" >Update Message</button>-->
    <br>

    <button @click.prevent="addUsersNew({'id':3,'name':'rohim','age':50})" >Add Message</button>
    <br>
    <br>

    <button @click.prevent="addProducts({'id':33,'name':'NEW IPHONE 1','price':5000})" >Add NEW Products</button>

    <ul>
      <li v-for="(value,key) in getUsersAge" :key="key">
        {{value}}
      </li>
    </ul>
    <br>
    <h2>Products</h2> <br>

    <ul>
      <li v-for="(value,key) in getPrdts" :key="key">
        {{value.name}} -   {{value.price}}
      </li>
    </ul>

  </div>
</template>

<script>
import { mapState , mapGetters ,mapActions , mapMutations } from 'vuex'

export default {
  data(){
    return {
      // msg: this.$store.state.msg,
    }
  },
  mounted(){

  },
  computed:{
    //sprate opperator

    ...mapState({pmessage : state  => state.products.message }),
    ...mapState({cmessage : state  => state.cart.message }),
    // ...mapGetters(['getUsersAge','countProduct','getProducts']),

    ...mapGetters("products",{productcount: "countProduct"}),
    ...mapGetters("cart",{catCount: "countProduct"}),

    ...mapGetters("products",{getPrdts: "getProducts"}),

    ...mapGetters(['getUsersAge']),


  },
  methods:{
    // ...mapActions(['updateMessageActions']),

    ...mapActions('products',{addProducts:'addProductAction'}),
    ...mapMutations({addUsersNew:'addUsers'}),
  }
}

// computed:{
//   msg(){
//     return this.$store.state.msg
//   },
//   getUser(){
//     return this.$store.getters.getUsersAge;
//   }
// },
// methods:{
//   updatMessage(){
//     this.$store.dispatch("updateMessageActions");
//   }
// }
</script>


