import path from "path";
import { version } from "../package.json";
import { IConfig } from "./types/config";

const publicPath = path.join(__dirname, "../public/");

export const isProduction = process.env.NODE_ENV === "production";
const appPort = Number.parseInt(process.env.PORT ?? "") || 3000;

export const config: IConfig = {
  app: {
    port: appPort,
    cors: {
      methods: ["GET"],
      origin: "*",
    },
    swagger: {
      apis: [path.join(__dirname, "/routes/*.ts")],
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Vorlesungsplan+ API",
          version,
          description:
            "Node.js API for fetching courses, lectures and events of the DHBW Mosbach and Bad Mergentheim. For more information, visit https://github.com/larsrickert/vorlesungsplan-plus",
          contact: {
            name: "Lars Rickert",
            url: "https://lars-rickert.de",
            email: "dev@lars-rickert.de",
          },
        },
        servers: [
          {
            url: "https://api.vorlesungsplan.lars-rickert.de",
            description: "Production server",
          },
          {
            url: `http://localhost:${appPort}`,
            description: "Local development server",
          },
        ],
      },
    },
  },
  logger: {
    maxSize: 1024 * 1024 * 2,
  },
  cache: {
    courses: 1000 * 60 * 60 * 24,
    lectures: 1000 * 60 * 10,
    events: 1000 * 60 * 30,
  },
  stuv: {
    apiHost: "https://api.stuv.app/rapla",
  },
  apps: {
    ios: {
      widget: {
        version: "4.0.0",
        filePath: `${publicPath}vorlesungsplan-plus-ios-widget-v4-0-0.scriptable`,
      },
    },
  },
};
