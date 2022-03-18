import cors from "cors";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import corsOptions from "./config/cors";
import environment from "./config/environment";
import swaggerOptions from "./config/swagger";
import router from "./routes";

const app = express();
app.use(cors(corsOptions));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerOptions)));
app.use(router);

app.listen(environment.port, () => {
  console.log(`The application is listening on http://localhost:${environment.port} !`);
});

require("./routes");
