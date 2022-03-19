import logger from '../helpers/logger';
import router from './index';

router.post('/mail', async (req, res) => {
  logger.log('Request to /mail');

  // TODO: implement
  res.status(405).send('Method not implemented yet.');
});
