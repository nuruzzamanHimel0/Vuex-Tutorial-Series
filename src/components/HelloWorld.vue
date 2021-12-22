<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click.prevent="updateMessageActions('Update hye jao hala')" >Update Message</button>
    <br>

    <button @click.prevent="addUsersNew({'id':3,'name':'rohim','age':50})" >Add Message</button>
    <br>

    <ul>
      <li v-for="(value,key) in getUsersAge" :key="key">
        {{value}}
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
    ...mapState(['msg']),
    ...mapGetters(['getUsersAge']),

  },
  methods:{
    ...mapActions(['updateMessageActions']),
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


