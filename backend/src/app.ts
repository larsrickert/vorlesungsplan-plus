import cors from "cors";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { config } from "./config";
import errorMiddleware from "./middleware/error.middleware";
import loggerMiddleware from "./middleware/logger.middleware";
import { coursesRouteGetHandler } from "./routes/courses.routes";
import { eventsRouteGetHandler } from "./routes/events.routes";
import { indexRouteGetHandler } from "./routes/index.routes";
import { iosWidgetRouteGetHandler, iosWidgetVersionRouteGetHandler } from "./routes/ios.routes";
import { lecturesRouteGetHandler } from "./routes/lectures.routes";
import { createLogger } from "./utils/logger";

export const app = express();
app.use(cors(config.app.cors));

export const logger = createLogger();

// middleware (has to be registered before routes)
app.use(loggerMiddleware);

// app routes
app
  .use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(config.app.swagger)))
  .get("/", indexRouteGetHandler)
  .get("/courses", coursesRouteGetHandler)
  .get("/lectures/:id", lecturesRouteGetHandler)
  .get("/events", eventsRouteGetHandler)
  .get("/ios/widget", iosWidgetRouteGetHandler)
  .get("/ios/widget/version", iosWidgetVersionRouteGetHandler);

app.listen(config.app.port, () => console.log(`Running on http://localhost:${config.app.port}`));

// error middleware must be registered at the end
app.use(errorMiddleware);
