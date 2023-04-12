const pg = require("pg");
const fs = require("fs");

const connectionString = "ASK FOR CONNECTION STRING";
const main = async () => {
  const pgClient = new pg.Client(connectionString);
  pgClient.connect();
  const query = await pgClient.query(
    `Select * from "Session" as s where "userId" = 'user_2O4NimnTaXboR0w8kRWpYJSoT6u';`
  );
  fs.writeFileSync("./sarah_data.json", JSON.stringify(query.rows));
  await pgClient.end();
};

main();
