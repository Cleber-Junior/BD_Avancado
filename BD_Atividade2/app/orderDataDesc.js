import * as fb from "firebase/database"; // sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
  .then((db) => {
    let consultaR = fb.query(
      fb.ref(db, "produtos/"),
      fb.orderByValue("id_prod")
    );

    fb.onValue(consultaR, (snapshot) => {
      let dados = Object.entries(snapshot.val());
      let dataR = Object.fromEntries(dados.reverse());
      console.table(dataR);
    });
  })
  .catch((err) => console.log(err));
