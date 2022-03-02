const { Pool } = require("pg");

const PG_URI =
  "postgres://oydkzsfe:DbhRvLIlVQ7oC18RexbRc5k7sLPeS7vk@castor.db.elephantsql.com/oydkzsfe";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
