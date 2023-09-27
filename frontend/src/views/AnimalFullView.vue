<script setup>
import { $api } from "@/helpers/http";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

onMounted(async () => {
  try {
    const route = useRoute();
    const animalId = route.params.id;
    const { data: petRes } = await $api.get(`pets/getPet/${animalId}`);
    await store.dispatch("setPet", petRes);
  } catch (error) {
    console.log("error");
    console.log(error);
    router.push("/");
  }
});
</script>
<template>
  <a
    href="#"
    class="center flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      v-bind:src="$store.state.pet.img"
      alt=""
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ $store.state.pet.name }} - {{ $store.state.pet.breed }}, location :
        {{ $store.state.pet.location }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ $store.state.pet.description }}
      </p>
    </div>
  </a>
</template>

<style lang="css" scoped>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
