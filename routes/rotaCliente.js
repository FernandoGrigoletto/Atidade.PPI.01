import { Router } from "express";
import ClienteCtrl from "../controle/clienteCtrl.js";

const rotaCliente = Router;
const cliCtrl = new ClienteCtrl();

rotaCliente.get("/", cliCtrl.consultar);
rotaCliente.post("/", cliCtrl.gravar);
rotaCliente.put("/", cliCtrl.alterar);
rotaCliente.patch("/", cliCtrl.alterar);
rotaCliente.delete("/", cliCtrl.excluir);

export default rotaCliente;