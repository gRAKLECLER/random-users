<template>
  <div>
    <header class="header">
      <div @click="getUsers()">
        <router-link to="/">Home</router-link> 
      </div>
    </header>
    <div class="filter">
      <BaseButton 
        :array="$store.state.numberResult"
        functionName="getUserByResult"
        @click="getResultFilter(number)"
      />
      <BaseButton 
        :array="$store.state.genreResult"
        functionName="getUserByGenre"
        @click="getResultFilter(genre)"
      />
    </div>
    <section class="card">
        <CardUser v-for="(user,i) in getAllUsers" 
        :key="i"
        :firstname="user.name.first"
        :lastname="user.name.last"
        :email="user.email"
        :gender="user.gender"
        :country="user.location.country"
        @click="goToUserPage(user.login.uuid)"
        />
    </section>
  </div>
</template>

<script>
import CardUser from '@/components/cardUser.vue'
import BaseButton from '@/components/baseButton.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    CardUser,
    BaseButton,
  },
  mounted(){
    this.$store.dispatch("getUsers");
  },

  computed: {
    getAllUsers(){
      return this.$store.getters.allUsers
    },
  },

  methods:{
    getUsers() {
        this.$store.dispatch("getUsers");
    },
    
    goToUserPage(id){
      this.$router.push({ name: 'User', params: { id: id } })
    }
  }
}
</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(82, 82, 194);
    padding: 1rem;
    height: 5vh;
  }

  .card {
    display: grid;
    justify-content: flex-start;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    gap: 2rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .filter{
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

</style>
