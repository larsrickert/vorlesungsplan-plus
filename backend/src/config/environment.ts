import path from 'path';
import { IEnvironment } from '../types/config';

const publicPath = path.join(__dirname, '../../public/');

const environment: IEnvironment = {
  port: Number.parseInt(process.env.PORT ?? '') || 3000,
  cache: {
    coursesDuration: 1000 * 60 * 60 * 24,
    lecturesDuration: 1000 * 60 * 10,
    eventsDuration: 1000 * 60 * 30,
  },
  stuvApiHost: 'https://api.stuv.app/rapla',
  calendarListHost: 'http://ics.mosbach.dhbw.de/ics/calendars.list',
  apps: {
    android: {
      version: '1.1.0',
      filePath: `${publicPath}vorlesungsplan-plus-1-1-0.apk`,
    },
    ios: {
      widget: {
        version: '3.0.0',
        filePath: `${publicPath}mosbach-vorlesungsplan-widget-v3.scriptable`,
      },
    },
  },
};

export default environment;
