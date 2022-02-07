# ASMVC Middleware

Middleware is a bridge between HTTP Requests and Client. With Middleware you are able to do some sort things like: `validating`, `verifying`, `record` and much more.

## Met Middleware

ASMVC provide a `BaseMiddleware` that acts as your base for a middleware. You can generate those by:<br>
`php asmvc create:middleware MiddlewareName`

Above commands will generate a middleware file located in:

```text
.
└── App
    └── Middleware
        ├── MiddlewareName.php
```

And for your middleware file. You should get something like this:

```php
<?php

 namespace Albet\Asmvc\Middleware;

 use Albet\Asmvc\Core\BaseMiddleware;

 class MiddlewareName extends BaseMiddleware
 {
     public function middleware()
     {

     }
 }
```

Then you need to fill any of your middleware main logic in `middleware()` function.

## Examples

This is a example on how you're going to fill them:

```php
<?php

namespace Albet\Asmvc\Middleware;

use Albet\Asmvc\Core\BaseMiddleware;

class MiddlewareName extends BaseMiddleware
{
    public function middleware()
    {
        /**
         * If user has no login session or if they had but the value are false then
         * Redirect user back to /login page by using $this->denied() method.
         */
        if (!isset($_SESSION['logged']) || $_SESSION['logged'] != true) {
            $this->denied();
        }
    }
}

```

## Usage

In order to use Middleware. You need to specify them in `url.php`.

> More information: [Routing](routing.md)

Example Usage:

```php
Route::add('/dashboard', [AdminController::class, 'index'], Admin::class);
```

## Modifying `denied()` method

Instead of changing your `denied()` method from the Core files. You should use method overriding instead.

Example:

```php
public function denied()
{
    return redirect('/dashboard');
}

public function middleware()
{
    /**
     * If user has no login session or if they had but the value are false then
     * Redirect user back to /login page by using $this->denied() method.
     */
    if (!isset($_SESSION['logged']) || $_SESSION['logged'] != true) {
        $this->denied();
    }
}
```

## Checking and validating with Database

You also could perform some checks to database.

> See [Model](model.md) if you need more information regarding available method of `db`.

```php
public function middleware()
{
    /**
     * Check into db which level logged user on.
     * If it's not admin. Denied the access.
     */
    $get_level = $this->db->table('users')->where('id', $_SESSION['user_id'])->first();
    if($get_level->level != 'admin') {
        $this->denied();
    }
}
```

> Next: [Requests](request.md)