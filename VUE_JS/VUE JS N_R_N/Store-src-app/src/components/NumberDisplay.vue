<template>
  <div>
    <h2>{{ getNumbers }}</h2>
    <h3>{{ getName }}</h3>
  </div>
</template>

<script>
export default {
  name: "NumberDisplay",
  computed: {
    getNumbers() {
      return this.$store.getters.getNumbers;
    },
    getName(){
      return this.$store.getters.getName;
    }
  }
};
</script>
