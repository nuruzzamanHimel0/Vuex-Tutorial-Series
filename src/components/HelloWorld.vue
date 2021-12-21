<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click.prevent="updatMessage" >Update Message</button>
    <br>

    <ul>
      <li v-for="(value,key) in getUsersAge" :key="key">
        {{value}}
      </li>
    </ul>

  </div>
</template>

<script>
import { mapState , mapGetters } from 'vuex'

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
    ...mapState(['msg']),
    ...mapGetters(['getUsersAge']),

  },
  methods:{
    updatMessage(){
      this.$store.dispatch("updateMessageActions");
    }
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
</script>


