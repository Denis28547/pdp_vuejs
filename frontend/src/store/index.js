import { getAnimalImg } from "@/helpers/animalImage";
import { createStore } from "vuex";

export default createStore({
  state: {
    authenticated: false,
    pets: [],
    pet: {
      name: "",
      description: "",
      type: "",
      location: "",
      breed: "",
      img: "",
    },
  },
  getters: {},
  mutations: {
    SET_AUTH: (state, auth) => (state.authenticated = auth),
    SET_PETS: (state, petsArr) => {
      const newPetsArr = petsArr.map((element) => {
        const img = getAnimalImg(element.type);
        return { ...element, img };
      });
      state.pets = newPetsArr;
    },
    SET_PET: (state, pet) => {
      const img = getAnimalImg(pet.type);
      state.pet = { ...pet, img };
    },
  },
  actions: {
    setAuth: ({ commit }, isAuth) => commit("SET_AUTH", isAuth),
    setPets: ({ commit }, petsArr) => commit("SET_PETS", petsArr),
    setPet: ({ commit }, pet) => commit("SET_PET", pet),
  },
  modules: {},
});
