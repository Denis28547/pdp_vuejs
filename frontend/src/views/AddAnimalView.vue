<script setup>
import { reactive } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { $api } from "../helpers/http";

const router = useRouter();

const petData = reactive({
  animalTypes: [],
  animalLocations: [],
});

const data = reactive({
  pet_name: "",
  pet_breed: "",
  pet_type: [],
  pet_location: [],
  pet_description: "",
});

onMounted(async () => {
  try {
    const { data: res } = await $api.get("pets/getPetInfo");
    petData.animalTypes = res.types;
    petData.animalLocations = res.locations;
    data.pet_type = res.types[0];
    data.pet_location = res.locations[0];
  } catch (error) {
    console.log("error");
    console.log(error);
  }
});

const submit = async () => {
  try {
    const { data: res } = await $api.post("pets/addPet", data);
    await router.push("/");
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};
</script>

<template>
  <form @submit.prevent="submit" style="margin: 40px">
    <div class="relative z-0 w-full mb-6 group">
      <input
        v-model="data.pet_name"
        type="text"
        name="pet_name"
        id="pet_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="pet_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Pet name</label
      >
    </div>
    <div class="relative z-0 w-full mb-6 group">
      <input
        v-model="data.pet_breed"
        type="text"
        name="pet_breed"
        id="pet_breed"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="pet_breed"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Breed</label
      >
    </div>

    <div>
      <select v-model="data.pet_type">
        <option v-for="animalType in petData.animalTypes">
          {{ animalType }}
        </option>
      </select>
    </div>
    <div>
      <select v-model="data.pet_location">
        <option v-for="animalLocation in petData.animalLocations">
          {{ animalLocation }}
        </option>
      </select>
    </div>

    <div style="margin: 10px 0">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your message</label
      >
      <textarea
        v-model="data.pet_description"
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write description for your pet"
      ></textarea>
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<style lang="scss" scoped></style>
