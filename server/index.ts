import express = require("express");
const app: express.Application = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`T9 app listening on port ${port}!`);
});
