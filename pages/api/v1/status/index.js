import database from "../../../../infra/database.js";

async function status (request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");

  console.log("DB:", process.env.POSTGRES_DB);
  console.log("DATABASE:", process.env.POSTGRES_DATABASE);
  
  response.status(200).json({chave: result.rows});
}

export default status;