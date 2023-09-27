<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const searchBar = ref("");

onMounted(() => {
  const route = useRoute();
  const search = route.params.search;
  searchBar.value = search;
  console.log(search);
});
</script>

<template>
  <div>{{ search }}</div>
</template>

<style lang="scss" scoped></style>
