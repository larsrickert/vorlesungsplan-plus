import router from './index';

router.get('/help', (req, res) => {
  res.redirect(301, '/docs');
});
