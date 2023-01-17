const navigations = [
    {link: "intro", title: "What is Restful?"},
    {link: "api-routes", title: "The API Routes and Conventions"},
    {link: "rest-interface", title: "The REST Interface"},
    {link: "client", title: "Client Request"}
];

const apiFile = `<?php

use App\\Asmvc\\Core\\Middleware\\MiddlewareRouteBuilder;
use App\\Asmvc\\Core\\Routing\\Route;

/**
 * Welcome to Api Routing
 * 
 * Routes in here are CSRF-free and mapped to /api automatically.
 * Have a try to hit /api/hello below!
 */

return static function (Route $router, MiddlewareRouteBuilder $mwBuilder) {
    $router->get('/hello', function () {
        return ['hello' => 'world'];
    });
};
`;

export {navigations, apiFile};