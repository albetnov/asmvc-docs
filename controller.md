# Controller

Controller is a place where you can store your logic.

## Examples

This is a example of Controller provided by ASMVC by default:

```php
<?php

namespace Albet\Asmvc\Controllers;

use Albet\Asmvc\Core\Requests;
use Albet\Asmvc\Core\Validator;
use Albet\Asmvc\Models\TestModel;

class HomeController
{
    public function index()
    {
        return view('home');
    }
}
```

## How to get them?

ASMVC provided you a easy way to generate a controller:

- Manual Way
  Since controller doesn't need to extends anything for now you can simply by right click conntroller folder and then click new file.
  This is the required standard to make sure your controller works.

```php
<?php

namespace Albet\Asmvc\Controllers;

class FileName {
}

```

- ASMVC Generated Way
  You can also generate one by running `php asmvc create:controller ControllerName`.
  The file will generated at:

```text
.
└── App
    └── Controller
        ├── ControllerName.php
```

## How to use it then?

To use a controller. You need to define them in the `url.php` file. See [Routing](routing.md)

Examples:

`File: url.php`

```php
Route:add('/somerurl', [Some::class, 'someMethod']);
```

> Next: [Model](model.md)
