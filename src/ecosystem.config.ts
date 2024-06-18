module.exports = {
  apps: [
    {
      name: 'nest-app', // You can choose any name for your application
      script: 'dist/main.js', // The entry point of your built NestJS application
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
