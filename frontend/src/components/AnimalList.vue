<script setup>
import AnimalCard from "./AnimalCard.vue";

const props = defineProps({ petsList: [] });
</script>

<template>
  <div class="grid grid-cols-4 gap-10" style="margin: 40px">
    <AnimalCard v-for="pet in props.petsList" :pet="pet" />
  </div>
</template>

<style lang="scss" scoped></style>
