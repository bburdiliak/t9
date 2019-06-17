import express = require("express");
import numbersToWordList = require("./numbersToWordList");
const app: express.Application = express();
const port = 3000;

app.get("/api/v1/:numbers", (request, response) => {
  response.send(numbersToWordList.toWordList(request.params.numbers));
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`T9 app listening on port ${port}!`);
});
