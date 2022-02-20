# Database Migration

Thanks to [Eloquent](https://github.com/illuminate/database). ASMVC are now be able to provide you a database migration.

## How to make a migration

To make a migration you can do it by performing below:

- Class Specified Migration

```bash
php asmvc create:migration MigrationName
```

- Anonymous Migration

```bash
php asmvc create:migration MigrationName anonymous
```

Your migration file should be generated on:

```text
.
└── App
    └── Database
        └── Migrations
            ├── MigrationName.php
```

## Usage

Your migration file should look like this:

```php
<?php

namespace Albet\Asmvc\Database\Migrations;
use Albet\Asmvc\Core\BaseMigration;
use Illuminate\Database\Schema\Blueprint;

return new class extends BaseMigration
{
    public function up()
    {
        $this->schema->create('', function(Blueprint $table){

        });
    }

    public function down()
    {
        $this->schema->dropIfExists('');
    }
};
```

Or if you chose class specified. It's still look the same though. Just with some differences:

```php
<?php

namespace Albet\Asmvc\Database\Migrations;
use Albet\Asmvc\Core\BaseMigration;
use Illuminate\Database\Schema\Blueprint;

class MigrationName extends BaseMigration
{
    public function up()
    {
        $this->schema->create('', function(Blueprint $table){

        });
    }
    public function down()
    {
        $this->schema->dropIfExists('');
    }
};
```

To use it you can view at these example below:

```php
public function up()
{
    $this->schema->create('TableName', function(Blueprint $table){
        $table->id();
    });
}

public function down()
{
    $this->schema->dropIfExists('TableName');
}
```

If you need more about what schema offer, please consult to [Eloquent](https://laravel.com/docs/migrations).

## Running your migration

To run a migration simply:

```bash
php asmvc run:migration
```

Or if you need for specific file

```bash
php asmvc run:migration MigrationName
```

You can also run it by refreshing (Drop and the Migrate) by doing:

```bash
php asmvc run:migration fresh
```
