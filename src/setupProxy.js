const { createProxyMiddleware } = require("http-proxy-middleware");
const { networkInterfaces } = require("os");

const localIp = networkInterfaces().en0[1].address;
console.log(localIp);

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http://192.168.1.4:3001`,
      changeOrigin: true,
    })
  );
};
