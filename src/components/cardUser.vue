<template>
  <div class="cards" v-on="$listeners">
      <h1 class="cards--name">{{ firstname }} - {{ lastname }} </h1> 
      <p class="cards--email"> {{ email }} </p>
      <p class="cards--gender"> {{ gender }} </p>
      <p class="cards--country"> {{ country }} </p>
  </div>
</template>

<script>
export default {
    props: {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        gender: {
            type: String,
            require: true
        },
        country: {
            type: String,
            require: true
        },
    }
}
</script>

<style>
</style>