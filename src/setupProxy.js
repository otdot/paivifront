const { createProxyMiddleware } = require("http-proxy-middleware");
const { networkInterfaces } = require("os");


module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http://localhost:3001`,
      changeOrigin: true,
    })
  );
};
