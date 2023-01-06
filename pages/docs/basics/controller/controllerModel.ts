export const navigations = [
    {link: "definition", title: "Controller is..."},
    {link: "looks", title: "How controller look like?"},
    {link: "generation", title: "Generating One"},
    {link: "dependency-injection", title: "Dependency Injection"},
    {link: "using-controller", title: "Using Controller"}
];

export const controllerFile = `<?php

namespace App\\Asmvc\\Controllers;

use App\\Asmvc\\Core\\Requests;
use App\\Asmvc\\Core\\REST\\Rest;

class HomeController
{
    public function index()
    {
        return include_view('home');
    }
}
`;

export const newRouterController = `// will invoke index() method of Controller class.
$router->get('/url', [Controller::class, 'index']);`;

export const oldRouterController = `// will invoke index() method of Controller class.
Route::get('/url', [Controller::class, 'index']);`;