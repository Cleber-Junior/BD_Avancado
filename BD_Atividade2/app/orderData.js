import * as fb from "firebase/database"; // sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
  .then((db) => {
    let consultar = fb.query(
      fb.ref(db, "produtos/"),
      fb.orderByChild("id_prod")
    );
    fb.onChildAdded(consultar, (snapshot) => {
      console.log(snapshot.val());
    });
  })
  .catch((err) => console.log(err));
