# Database Seeding

ASMVC provide a seeder that use both [Eloquent](https://github.com/illuminate/database) and [Faker](https://fakerphp.github.io/).

## Generate Seeder

To generate a seeder, you can do it by:

```bash
php asmvc create:seeder SeederName
```

The file then will be generated in:

```text
.
└── App
    └── Database
        └── Seeders
            ├── SeederName.php
```

## Usage

Your seeder file should look like this:

```php
<?php

namespace Albet\Asmvc\Database\Seeders;

use Albet\Asmvc\Core\Seeders;

class SeederName extends Seeders
{
    public function run()
    {
        /**
         * @param int $count
         * @param string|callable $table
         * @param array $data
         * count() method is optional.
         */
        $this->count($count)->seed($table, $data);
    }
}
```

To use it you can modify code inside `run()` function.

Example:

```php
public function run()
{
    /**
     * @param int $count
     * @param string|callable $table
     * @param array $data
     * count() method is optional.
     */
    $this->count(10)->seed('TableName', [
        'name' => $this->faker->name(),
    ]);
}
```

In this example, the seeder will happen 10 times. The seeder will also seed it to `TableName` and `name` field. The field value will use faker to generate a random
data for it.

## Running Seeder

In order to run seeder. Simply do it by:

```bash
php asmvc run:seeder
```

Or if you need for specific file:

```bash
php asmvc run:seeder SeederName
```
