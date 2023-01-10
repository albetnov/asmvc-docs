const navigations = [
    {link: "definition", title: "What is Middleware?"},
    {link: "generating-middleware", title: "How to make Middleware?"},
    {link: "middleware-method", title: "The middleware method"},
    {link: "db-method", title: "The db method"},
    {link: "this-scope", title: "This Scope"},
    {link: "using-middleware", title: "Using the Middleware"}
];

const middlewareFile = `
<?php

namespace App\\Asmvc\\Middleware;

use App\\Asmvc\\Core\\Middleware\\Middleware;

class MiddlewareName extends Middleware
{
   public function middleware(): void {

   }
}  
`;

const routeMw = `return static function (Route $router, MiddlewareRouteBuilder $mwBuilder): void {
    $router->get('/', [HomeController::class, 'index'], $mwBuilder->put(MiddlewareName::class, ['role' => 'admin']));
};`;

const putApi = `$mwBuilder->put(Middleware $middleware, array? $parameters)`;

const paramUsageExample = `public function middleware()
{
   if($this->params->role === "admin") {
        if($this->db()->table('users')->where('id', auth()->id)->first()->role !== "admin") {
            return redirect("/");
        }
   }
}
`;

export {navigations, middlewareFile, routeMw, putApi, paramUsageExample};