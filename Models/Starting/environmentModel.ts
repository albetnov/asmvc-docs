const navigations = [
    {link: "definition", title: "What is Enviroment?"},
    {link: "the-file", title: "The .env File"},
    {link: "what-is-that", title: "Definitions of each line"}
];

const envFile = `APP_ENV=development
APP_MODELS_DRIVER=asmvc
APP_VIEW_ENGINE=latte
ROUTING_DRIVER=new

DATABASE_HOST=localhost
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_NAME=asmvc

SESSION_TYPE=php
REDIS_SERVER=127.0.0.1
REDIS_PORT=6379
REDIS_DB_NUMBER=0
REDIS_AUTH_PASS=`;

export {navigations, envFile};