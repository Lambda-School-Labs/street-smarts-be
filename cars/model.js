const db = require("../data/dbconfig");

module.exports = {
  search,
  searchById,
};

function search(orderBy, page, where) {
  const limit = 10;
  return db("epa_vehicles_all")
    .select()
    .where(where)
    .orderBy(orderBy)
    .offset(limit * page)
    .limit(limit);
}

function searchById(id) {
  return db("epa_vehicles_all").select().where({ id }).first();
}
