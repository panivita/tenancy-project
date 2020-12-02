const express = require("express");
const knex = require("../database");
const router = express.Router();

//Returns all tenancies
router.get("/", async (req, res) => {
  const allTenancies = await knex.select("*").table("flats");
  res.json(allTenancies);
});

//Adds a new tenancy
router.post("/", async (req, res) => {
  const { address, description, url, size, rooms } = req.body;
  const newTenancy = { address, description, url, size, rooms };

  await knex("flats").insert(newTenancy);
  res.send("New tenancy added");
});

//Returns Tenancy by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tenancyById = await knex("flats").select().where({ id });
  res.json(tenancyById);
});

// Updates the Tenancy by id
router.put("/:id", async (req, res) => {
  const { address, description, size, rooms } = req.body;
  const { id } = req.params;

  const updateTenancy = await knex("flats").where({ id }).update({
    address: address,
    description: description,
    size: size,
    rooms: rooms,
  });
  res.json(updateTenancy);
});

//Deletes the meal by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await knex("flats").where({ id }).del();
  res.send(`Tenancy with id ${id} was deleted`);
});

router.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

module.exports = router;
