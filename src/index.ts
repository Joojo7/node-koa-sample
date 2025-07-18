// src/index.ts
import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/page', async (ctx) => {
  ctx.body = `
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body class="p-5">
        <div class="container">
          <h1 class="text-primary">Hello from Koa + Bootstrap</h1>
          <button class="btn btn-success">Click me</button>
        </div>
      </body>
    </html>
  `;
});

router.get('/', async (ctx) => {
  ctx.body = {message: "Hello from Koa"}
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Koa server running at http://localhost:${PORT}`);
});
