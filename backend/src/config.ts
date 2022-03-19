import path from 'path';
import { version } from '../package.json';
import { IConfig } from './types/config';

const publicPath = path.join(__dirname, '../public/');

export const isProduction = process.env.NODE_ENV === 'production';
const appPort = Number.parseInt(process.env.PORT ?? '') || 3000;

const config: IConfig = {
  app: {
    port: appPort,
    cors: {
      methods: ['GET'],
      origin: '*',
    },
    swagger: {
      apis: [path.join(__dirname, '/routes/*.{js,ts}')],
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Vorlesungsplan+ API',
          version,
          description:
            'JavaScript API for the courses, lectures and events of the DHBW Mosbach. For more information, visit https://github.com/larsrickert/vorlesungsplan-plus',
          contact: {
            name: 'Lars Rickert',
            url: 'https://github.com/larsrickert/vorlesungsplan-plus',
            email: 'dev@lars-rickert.de',
          },
        },
        servers: [
          {
            url: 'https://api.rickstack.de',
            description: 'Production server',
          },
          {
            url: `http://localhost:${appPort}`,
            description: 'Development server',
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
    apiHost: 'https://api.stuv.app/rapla',
  },
  apps: {
    ios: {
      widget: {
        version: '3.0.0',
        filePath: `${publicPath}mosbach-vorlesungsplan-widget-v3.scriptable`,
      },
    },
  },
};

export default config;
