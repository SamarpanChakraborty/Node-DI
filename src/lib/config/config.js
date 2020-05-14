const appPrefix = process.env.APP_PREFIX || '';

module.exports = () => ({
  app: {
    port: process.env[`${appPrefix}APP_PORT`]
  },
  application_logging: {
    file: process.env.LOG_PATH,
    level: process.env[`${appPrefix}LOG_LEVEL`],
    console: process.env.LOG_ENABLE_CONSOLE || true
  },
  url: process.env[`${appPrefix}URL`]
});
