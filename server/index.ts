import express from "express";
import { isReal } from "./commonWords";
import { toWordList } from "./numbersToWordList";
const app: express.Application = express();
const port = 3000;

app.get("/api/v1/:numbers", (request, response) => {
  response.send(toWordList(() => true)(request.params.numbers));
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`T9 app listening on port ${port}!`);
});
