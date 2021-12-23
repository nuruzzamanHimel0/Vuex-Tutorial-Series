<template>
  <div class="hello">
    <div class="row">
      <div class="col-md-12">
        <h2>{{message}} , count is = {{usersCount}} </h2>

        <br><br>
        <button @click.prevent="addUsers({id:222,name:'test1',age:222})" >Add User Mutaion</button>

        <ul>
          <li v-for="(value,key) in getUsersAge" :key="key">
            {{ value.name}} <br>
          </li>
        </ul>


      </div>
      <div class="col-md-6">
        <h2>{{cartmeg}} , count is = {{crtCount}} </h2>
        <br>
        <button @click.prevent="addCartsAct({id:'222',name:'dfdddd',priece:'4444'})" >Add Cart</button>
        <br>
        <ul>
          <li v-for="(value,key) in getallcats" :key="key">
              {{value.name}} <br>
          </li>
        </ul>

      </div>
      <div class="col-md-6">
        <h2>{{pdtmsg}} , count is = {{pdtCount}}</h2>
        <button @click="addProdtfunction( {id:4, name:'iphon 444', price:400})" >Add Products</button>
        <br>
        <ul>
          <li v-for="(value,key) in getallproducts" :key="key">
              {{value.name}} <br>
          </li>
        </ul>


      </div>
    </div>

  </div>
</template>

<script>
  import {mapState , mapGetters , mapActions , mapMutations} from 'vuex'

export default {
  data(){
    return {
      // msg: this.$store.state.msg,
    }
  },
  mounted(){

  },
  computed:{
    //normal
    ...mapState(['message']),
    ...mapGetters(['usersCount','getUsersAge']),
    // module wise
    ...mapState({cartmeg : state => state.cart.message }),
    ...mapState({pdtmsg: state => state.products.message }),

    ...mapGetters('products' , {pdtCount: "countProduct" }),
    ...mapGetters('cart',{crtCount: 'countcart'}),

    ...mapGetters('products',{getallproducts:'getProducts'}),
    ...mapGetters('cart',{getallcats:'getcarts'}),




  },
  methods:{
    //vuex normal
    ...mapMutations(['addUsers']),

    // vuex module
    ...mapActions('products',{addProdtfunction: 'addProductAction'}),

    ...mapActions('cart',{addCartsAct:'addCartAction'}),
  }
}

</script>

<style scoped>
  .col-md-6,.col-md-12{
    border: 5px solid red;
  }
</style>


