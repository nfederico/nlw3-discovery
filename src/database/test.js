const Database =require('./db');
const saveOrphanages = require('./saveOrphanage');

Database.then(async db => {
   /* await db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "-27.222633",
        "-49.6555874",
        "Lar Dos mininos",
        "Presta assistência a crianças de 06 a 15 anos que se encontre em situaçao de risco e/o3 vulnerabilidade social.",
        "551526252373",
        "https://images.unsplash.com/photo-1598137203989-3152bec01cf4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        "Horário de visitas Das 18h até 8h",
        "0"
    );
    
    `); */


const selectedOrphanages = await db.all("SELECT * FROM orphanages");
console.log(selectedOrphanages);

});
