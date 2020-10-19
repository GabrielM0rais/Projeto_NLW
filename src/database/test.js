const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    
    // await saveOrphanage(db, {   
    //     lat: "-5.1840236",
    //     lng: "-37.3659235",
    //     name: "Lar dos meninos",
    //     about: "Presta assistência a crianças de 06 a 05 anos que se encontre em situação de risco e/ou vulnerabilidade",
    //     whatsapp: "84 99233-5780",
    //     images: [
    //         "https://images.unsplash.com/photo-1572248364230-7f412885f2da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1597552816350-edd306e5c06f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    //     opening_hours: "Horários de visita das 8h até as 18h",
    //     open_on_weekends: "0"
    // })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente um orfanato, pelo ID
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
    // console.log(orphanage)

    // apagar um ou mais dados da tabela
    //console.log(await db.run("DELETE FROM orphanages"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"))
})
