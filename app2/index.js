const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
   host: "redis-server",
   port: 6379
});

(async () => {
   await client.connect();
   await client.set("visits", 0);
})();

app.get("/", async (req, res) => {
   const visits = await client.get("visits");
   res.send("How many visits? ->> " + visits);
   await client.set("visits", parseInt(visits) + 1);
});

app.listen(8080, () => {
   console.log("Listening on port 8080");
});