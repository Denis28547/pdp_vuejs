import { $api } from "@/helpers/http";
import { ref, onMounted } from "vue";

export default function (searchStr) {
  const animalsList = ref([]);
  const isListLoading = ref(true);
  const fetching = async () => {
    try {
      const { data: petsRes } = await $api.get("pets/getPets");
      animalsList.value = petsRes;
      // await store.dispatch("setPets", petsRes);
    } catch (error) {
    } finally {
      isListLoading.value = false;
    }

    onMounted(fetching);
    return { animalsList, isListLoading };
  };
}
