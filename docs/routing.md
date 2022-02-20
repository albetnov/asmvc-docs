# ASMVC Routing

ASMVC provide a routing for your web apps. The routing file it self are located in:

```text
.
└── App
    └── Router
        ├── url.php
```

## Parameters

ASMVC now supports url's parameter. You can set it up by:

```php
Route::add('/product-detail/'.Route::PARAMETER, [ProductController::class, 'detail']);
```

And you can accept it with your controller by adding arguments to it.

```php
public function detail($id) {
  return vdd($id);
}
```

To accept a value, a user need to fill the url. Otherwise 404 returned.

`asmvc.test/product-detail/1`.

## Available Method

These following are the available method for set up a routing.

- `add`

  `Route::add('url', [controller::class, 'method'], 'HTTPMethod', middleware::class)`

  You can use Controller for a routing by doing `add` method. 4 Possible parameter are availble for you use:

  - `url`

  This parameter is required. You can define your url path here. Example: `/hello`.

  - `[controller::class, 'method']`

  This parameter is also required and must in Array format. The first index of array must a class then followed with the second index to define a method of the class.

  - `HTTPMethod`

  This parameter is optional. The default value however are `GET`. This parameter could also be replaced with Middleware Class. Leaving the next argument unneccessary to fill.

  - `middleware::class`

  This parameter is optional as well. The default value are null. And this parameter must be filled with a Middleware Class if you want to fill it.

- `inline`

  `Route::inline('url', callable function, HTTPMethod, Middleware::class)`

  You can insert your logic immediately in `url.php` by using this method. 4 Possible parameter are availble for you use:

  > Note: i would like to mention only a different parameter since url, http method, and middleware class act the same for rest method too.

  - `callable function`

  This parameter is required. You must define an anonymous function or callable function in this parameter.

- `view`

  `Route::view('url', views, HTTPMethod, Middleware::class)`

  You can use views only for routing by using this method. 4 Possible parameter are availble for you use: > Note: i would like to mention only a different parameter since url, http method, and middleware class act the same for rest method too.

  - `views`

  This parameter is required. This parameter could be a `string` or `array`. If you only need a views then use `string` with starting point in `App/Views`.
  <br>Example: `view`. Location: `App/Views/view.php`

  If you also need a view data then specify it using `array` by: `[view, ['title' => 'hello']]`.

> Next: [Controller](controller.md)
