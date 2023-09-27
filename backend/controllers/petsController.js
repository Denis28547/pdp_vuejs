const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("../config");
const Pet = require("../models/Pet");
const Breed = require("../models/Breed");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authController {
  async getPetInfo(req, res) {
    const breeds = [];
    const types = ["Dog", "Cat", "Horse", "Cow", "Snake", "Bear"];
    const locations = ["Lviv", "Kyiv", "Kharkiv", "Odesa", "Chernihiv"];
    try {
      return res.json({ breeds, types, locations });
    } catch (e) {
      return res.status(500).json({ message: "Not ok" });
    }
  }

  async addPet(req, res) {
    try {
      const { pet_name, pet_breed, pet_type, pet_location, pet_description } =
        req.body;
      console.log(req.body);

      const { jwt: token } = req.cookies;

      if (!token) {
        return res.status(500).json({ message: "Not ok" });
      }

      const decodedUserData = jwt.verify(token, secret);

      const breed = new Breed({
        name: pet_breed,
      });
      await breed.save();

      const pet = new Pet({
        userId: decodedUserData.id,
        name: pet_name,
        breed: pet_breed,
        type: pet_type,
        location: pet_location,
        description: pet_description,
      });
      await pet.save();
      res.status(200);
      res.end();
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Registration error" });
    }
  }

  async getPet(req, res) {
    try {
      const { id } = req.params;
      const pet = await Pet.findById(id);
      res.json(pet);
      res.end();
    } catch (e) {
      res.status(500).json({ message: "Not ok" });
    }
  }

  async getPets(req, res) {
    try {
      const pets = await Pet.find();
      res.json(pets);
      res.end();
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new authController();
