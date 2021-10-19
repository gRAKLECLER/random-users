<template>
  <div>
    <header class="header">
        <router-link to="/">Home</router-link> 
    </header>
    <section class="card">
        <CardUser v-for="(user,i) in getAllUsers" 
        :key="i"
        :firstname="user.name.first"
        :lastname="user.name.last"
        :gender="user.gender"
        :country="user.location.country"
        />
    </section>
  </div>
</template>

<script>
import CardUser from '@/components/cardUser.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    CardUser
  },
  mounted(){
    this.$store.dispatch("getUsers");
  },
  computed: {
    getAllUsers(){
      return this.$store.getters.allUsers
    },
  }
}
</script>

<style>
  .header {
    display: flex;
    align-items: center;
    background-color: rgb(82, 82, 194);
    padding: 1rem;
    height: 5vh;
    margin-bottom: 10px;
  }

  .card {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    gap: 2rem;
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>
