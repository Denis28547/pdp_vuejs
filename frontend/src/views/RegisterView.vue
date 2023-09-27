<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import { $api } from "../helpers/http";

export default {
  setup() {
    const router = useRouter();

    const data = reactive({
      username: "",
      password: "",
    });

    const submit = async () => {
      try {
        await $api.post("auth/registration", data);
        await router.push("/login");
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    };

    return { data, submit };
  },
};
</script>

<template>
  <form @submit.prevent="submit" style="max-width: 400px; margin-left: 40px">
    <div class="mb-6">
      <label
        for="username"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your username</label
      >
      <input
        v-model="data.username"
        type="username"
        id="username"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@flowbite.com"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your password</label
      >
      <input
        v-model="data.password"
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Register
    </button>
  </form>
</template>

<style lang="scss" scoped></style>
