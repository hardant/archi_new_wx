import * as Router from 'koa-router';
const importDir = require('import-dir');
const routers = importDir('./routes');

let router = new Router();
router.prefix('/api')

Object.keys(routers).forEach(name => {
  router.use(routers[name].routes());
});

export default router;
