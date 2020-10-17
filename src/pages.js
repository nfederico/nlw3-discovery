const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

//const orphanages = require('./database/fakedata');

module.exports = {
  index(request, response) {
    return response.render("index");
  },

  async orphanages(request, response) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");

      return response.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return response.send("Database Error");
    }
  },
  async orphanage(request, response) {
    const id = request.query.id;
    try {
      const db = await Database; //INIT DATABASE
      const results = await db.all(
        `SELECT * FROM orphanages WHERE id = "${id}"`
      );
      const orphanage = results[0];
      console.log(orphanage);
      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      if (orphanage.open_on_weekends == "0") {
        orphanage.open_on_weekends = false;
      } else {
        orphanage.open_on_weekends = true;
      }
      return response.render("orphanage", { orphanage }); // Select returns an array
    } catch (error) {
      console.log(error);
      return response.send("Database Error");
    }
  },
  createOrphanages(request, response) {
    return response.render("create-orphanage");
  },
  async saveOrphanage(request, response) {
    const fields = request.body;
    //validate if all fields are filled
    if (Object.values(fields).includes("")) {
      return response.send("Todos os campos devem ser preenchidos!");
    }
    try {
      //Save one orphanate
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsappt,
        instructions: fields.instructions,
        images: fields.images.toString(),
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends
      });
      return response.redirect("/orphanages");
    } catch (error) {
      console.log(error);
      return response.send("Database error");
    }

   
  },
};
