# Model

Model is a part of MVC which acts as bridge between Application and Database

## Creating a model

You can make a model manually just like controllers but we highly recommend you to use:

`php asmvc create:model ModelName`

instead. This will create a new file located in:

```text
.
└── App
    └── Models
        ├── ModelName.php
```

## Dig inside of Model

Your generated model should look like this:

```php
<?php

namespace Albet\Asmvc\Models;

use Albet\Asmvc\Core\BaseModel;

class ModelName extends BaseModel
{
    protected $table = '';
}
```

`protected $table = ''` should contain your table defined in your database.

Meanwhile you could also join each table by doing this:

```php
public function getPrice()
{
        $this->join('price', 'ticket.id', 'price.id')->get(['price', 'ticket.name']);
}
```

## Using Models

To use a model you can do it by:

```php
$model = new ModelName();
$model->getPrice();
```

Meanwhile if you need to call it inside a controller:

```php
private $ticketM;

public function __construct()
{
    $this->ticketM = new ModelName;
}

public function index()
{
    return view('ticket_v', ['data' => $this->ticketM->get()]);
}
```

## Available Methods

This is a list of available method of Models.

- [`table`](#table)
- [`get`](#get)
- [`where`](#where)
- [`whereNoFormat`](#whereNoFormat)
- [`orWhere`](#orWhere)
- [`orderBy`](#orderBy)
- [`limit`](#limit)
- [`join`](#join)
- [`first`](#first)
- [`count`](#count)
- [`insert`](#insert)
- [`lastInsertId`](#lastInsertId)
- [`update`](#update)
- [`delete`](#delete)

### table

Define which table name to use. Usage:

```php
$this->table('tableName');
```

### get

Get a data from a table. Can be joined with other methods. Usage:

```php
$this->table('tableName')->get();
```

For models usage:

```php
$this->modelName->get();
```

Support optional parameter as array

```php
$this->modelName->get(["field1", "field2"]);
```

### where

Usage:

```php
$this->table('tableName')->where('id', 1)->get();
```

Models Usage:

```php
$this->modelName->where('id', 1)->get();
```

Support third optional parameter as string.

```php
$this->modelName->where('price', 5000, '<')->get();
```

> Note: Normal and Model Usage will not described both. Since they work the same way. You can use method in both models and table() query builder.

### whereNoFormat

Disable a string format for where condition. Causing the next where() method usage are without done without format.

Usage:

```php
$this->modelName->whereNoFormat()->where('id', 10)->get();
```

Comparasion:

Without `whereNoFormat()`:

```sql
SET id='10'
```

With `whereNoFormat()`;

```sql
SET id=10
```

### orWhere

Just like where with adding OR operator.

Usage:

```php
$this->modelName->where('name', $search)->orWhere('address', $search)->get();
```

Support third optional parameter as well

```php
$this->modelName->where('name', $search)->orWhere('address', $search, 'LIKE')->get();
```

### orderBy

Order the fetch by parameter

Usage:

```php
$this->modelName->orderBy('id', 'DESC')->get();
```

### limit

Limit fetch result by given parameter

Usage:

```php
$this->modelName->limit(5)->get();
```

### join

Join a table with another table

Usage:

```php
$this->modelName->join('price_table', 'ticket.id', 'price.id')->get(['price.price', 'ticket.id']);
```

### first

Get the first result from fetch. `Looping is not required`.

Usage:

```php
$this->modelName->first();
```

Support optional parameter as array:

```php
$this->modelName->first(['price', 'id']);
```

### count

Count a table row

Usage:

```php
$model = $this->modelName->count();
$count = $model->result;
```

### insert

Insert a data to the table

Usage:

```php
$data = [
    'ticket_type' => 'flight',
    'ticket_uid' => '2907jjbg989gjs1fg42f2'
];
$this->modelName->insert($data);
```

### lastInsertId

Get a last insert id from Auto Increment based table.

Usage:

```php
$data = [
    'ticket_type' => 'flight',
    'ticket_uid' => '2907jjbg989gjs1fg42f2'
];
$this->modelName->insert($data, true);
$lastinsert = $this->modelName->lastInsertId();
```

### update

Update a record based on parameter

Usage:

```php
$data = [
    'ticket_type' => 'bus',
    'ticket_uid' => '2907jjbg989gjs1fg42f2'
];
$this->modelName->where('id', 1)->update($data);
```

### delete

Delete a record

Usage:

```php
$this->modelName->where('id', 1)->delete();
```

> Next: [View](view.md) or [Latte View](latte.md)
