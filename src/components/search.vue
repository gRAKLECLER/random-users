<template>
  <form class="search" @submit.prevent="submit()">
      <input type="text" v-model="$store.state.search">
      <button>search</button>
  </form>
</template>

<script>

export default {
    methods: {
        submit () {
            if(this.$store.state.search){
                this.$store.dispatch("getUser");
                console.log(this.$store.state.search)
            }
        }
    }
}
</script>

<style>
    .search > input {
        width: 300px;
        outline: none;
        border: none;
        background: none;
        border-bottom: 2px solid #f0f0f0 ;
        color: #f0f0f0;
        margin-right: 5px;
        font-size: 16px;
    }

    .search > button {
        border: none;
        padding: .3rem;
        background-color: #f0f0f0;
    }
</style>