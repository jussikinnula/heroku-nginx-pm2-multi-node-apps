module.exports = {
  apps : [
    {
      name: "app1",
      script: "./apps/app1/index.js",
      instances: 1,
      env: {
        NODE_ENV: "development",
        PORT: 3001,
      },
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
      name: "app2",
      script: "./apps/app2/index.js",
      instances: 1,
      env: {
        NODE_ENV: "development",
        PORT: 3002
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
}
