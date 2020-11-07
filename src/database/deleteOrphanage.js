async function deleteOrphanage(db, id){
    return await db.run(`DELETE FROM orphanages WHERE id = '${id}'`)
}

module.exports = deleteOrphanage;
