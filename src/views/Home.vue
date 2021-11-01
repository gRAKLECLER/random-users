<template>
  <div>
    <header class="header">
      <div @click="getUsers()">
        <router-link to="/">Home</router-link> 
      </div>
    </header>
    <div class="filterNumber">
      <button 
        class="filterNumber__button"
        v-for="(number, i) in $store.state.numberResult"
        :key="i"
        @click="getResultByNumber(number)"
      >
        {{ number }}
      </button>
    </div>
    <section class="card">
        <CardUser v-for="(user,i) in getAllUsers" 
        :key="i"
        :firstname="user.name.first"
        :lastname="user.name.last"
        :email="user.email"
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
    CardUser,
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
    getResultByNumber(number) {
        this.$store.dispatch("getUserByResult", number);
    },
  
    getUsers() {
        this.$store.dispatch("getUsers");
    },
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

  .filterNumber {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  .filterNumber__button {
    cursor: pointer;
    margin-right: 1rem;
    border: none;
    padding: .5rem;
    border-radius: 10px;
    background-color: rgb(82, 82, 194);
    color: white;

    &:hover {
      background-color: rgb(94, 94, 206);
    }

    &:last-child {
      margin-right: 0;
    }
  }

</style>
