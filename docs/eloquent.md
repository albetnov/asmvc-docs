# Eloquent

> Eloquent is a default ORM for Laravel. For details you can visit [here](https://github.com/illuminate/database).

ASMVC provide eloquent for your complicated relational.

## Setting Up Eloquent

In order to use Eloquent. You need to tell ASMVC first to enable it. You can do it by modifying `.env` file like below:

```.env
APP_MODELS_DRIVER=asmvc
```

to

```.env
APP_MODELS_DRIVER=eloquent
```

## Using Eloquent

To use a eloquent you can generate the model after the `.env` was set to `eloquent` by performing:

```bash
php asmvc create:model ModelName
```

Your models should extends `BaseEloquent` instead of `BaseModel`.

The next steps are almost similar like how you would like use it with `Eloquent` in laravel.

## Example

Creating join can be achieved by:

```php
File: Users.php

<?php

namespace Albet\Asmvc\Models;

use Albet\Asmvc\Core\BaseEloquent;

class Users extends BaseEloquent
{
    protected $table = 'users';

    public function ticket()
    {
        $this->belongsTo(Tickets::class, 'ticket_id');
    }
}

```

> More about [Eloquent](https://laravel.com/docs/9.x/eloquent).

> Next: [View](view.md) or [Latte View](latte.md)
