<template>
    <div>
        <button 
            class="filter__button"
            v-for="(item, i) in array"
            :key="i"
            @click="getResultFilter(item)"
        >
            {{ item }}
        </button>
    </div>
</template>

<script>
export default {
    name: "baseButton",
    props: {
        array: {
            type: Array,
            require: true
        },
        functionName: {
            type: String
        }
    },
    methods: {
        getResultFilter(payload) {
            this.$store.dispatch(this.functionName, payload);
        },
    }
}
</script>

<style lang="scss">
    .filter__button {
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
  }
</style>