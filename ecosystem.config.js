module.exports = {
  apps: [
    {
      name: 'jahongircode-backend',
      script: './server',
      cwd: '/var/www/mirzayev-jahongir.uz/backend',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '150M',
      env: {
        PORT: 8080,
        DATA_DIR: '/var/www/mirzayev-jahongir.uz/backend/data',
        ADMIN_EMAIL: 'ithac4290@gmail.com',
        ADMIN_PASSWORD: 'jahongir@1212'
      }
    }
  ]
};
