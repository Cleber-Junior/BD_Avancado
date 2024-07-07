import * as fb from "firebase/database"; // sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
  .then((db) => {
    fb.get(fb.ref(db, "produtos/")).then((snapshot) => {
      if (!snapshot.exists()) {
        throw new Error("No data available");
      }
      for (const key in snapshot.val()) {
        console.log("Produto: " + snapshot.val()[key].nome);
      }
    });
  })
  .catch((err) => console.log(err));
