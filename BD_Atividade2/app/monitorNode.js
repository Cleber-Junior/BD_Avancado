import * as fb from "firebase/database"; // sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
  .then((db) => {
    fb.onValue(fb.ref(db, "produtos"), (snapshot) => {
      if (!snapshot.exists()) {
        console.log("Nenhum nó encontrado");
        process.exit(0);
      }

      console.log(snapshot.val());

      if (snapshot.key === "-MwSzyJMlNDToTGtPuhc") {
        console.log(snapshot.key);
        console.log("Remove callback");
        fb.off(fb.ref(db, "produtos"), "child_changed");
        throw new Error("Fim da execução");
      }

      setTimeout(() => {
        let updateProduct = {
          preco: 4849.99,
          qtd_estoque: 100,
        };
        fb.update(fb.ref(db, "produtos/-MwSzyJMlNDToTGtPuhc"), updateProduct);
      }, 7000);
    });
  })
  .catch((err) => console.log(err));
