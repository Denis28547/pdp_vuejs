<script>
// should have list of animals here
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import { $api } from "../helpers/http";
import AnimalList from "@/components/AnimalList.vue";
// import { useAnimalList } from "../hooks/useAnimalList";

export default {
  name: "HomeView",
  setup() {
    const store = useStore();
    // useAnimalList();
    const petsList = computed(() => store.state.pets);
    // console.log(useAnimalList);
    // console.log({ petsList });

    onMounted(async () => {
      const { data: petsRes } = await $api.get("pets/getPets");
      await store.dispatch("setPets", petsRes);
      try {
        const { data: res } = await $api.get("auth/user");
        await store.dispatch("setAuth", true);
      } catch (error) {
        await store.dispatch("setAuth", false);
      }
    });

    return { petsList };
  },
  components: { AnimalList },
};
</script>

<template>
  <AnimalList :petsList="petsList" />
</template>
