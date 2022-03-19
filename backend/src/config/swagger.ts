import { Options, SwaggerDefinition } from 'swagger-jsdoc';
import environment from './environment';

const definition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Vorlesungsplan+ API',
    version: '2.1.0',
    description:
      'JavaScript API for the courses, lectures and events of the DHBW Mosbach. For more information, visit https://github.com/larsrickert/vorlesungsplan-plus-api',
    license: {
      name: 'Licensed Under Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0',
    },
    contact: {
      name: 'Lars Rickert',
      url: 'https://github.com/larsrickert/vorlesungsplan-plus-api',
      email: 'lar.rickert.19@lehre.mosbach.dhbw.de',
    },
  },
  servers: [
    {
      url: 'https://api.rickstack.de',
      description: 'Production server',
    },
    {
      url: `http://localhost:${environment.port}`,
      description: 'Development server',
    },
  ],
};

const swaggerOptions: Options = {
  definition,
  apis: ['./src/routes/*.ts'],
};

export default swaggerOptions;
