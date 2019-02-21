import * as Koa from 'koa';
import * as Router from 'koa-router';
import api from './api';

const app = new Koa();
// const router = new Router();

// router.get('/*', async (ctx) => {
//     ctx.body = 'Hello World!';
// });

app.use(api.routes());

app.listen(3000);

console.log('Server running on port 3000');
