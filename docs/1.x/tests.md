# Automated Tests

ASMVC provide [`phpunit`](https://phpunit.de) to fullfil your needs.

## Creating a Test

You can generate a test by running `php asmvc create:test Example`. This command will create `ExampleTest.php` in:

```text
.
└── App
    └── Tests
        ├── ExampleTest.php
```

Your generate files should look like this:

```php
<?php

namespace Albet\Asmvc\Tests;

use Albet\Asmvc\Core\Config;
use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    // Your logic
}

```

## Example

```php
<?php

namespace Albet\Asmvc\Tests;

use Albet\Asmvc\Core\Config;
use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    public function testConfigIsArray()
    {
        $cfg = new Config;

        $this->assertIsArray($cfg->defineConnection(), 'Type data of defineConnection() is correct.');
    }

    public function testConfigFailed()
    {
        $cfg = new Config;

        $this->assertIsString($cfg->defineConnection(), 'Type data of defineConeection() is not string.');
    }
}

```

## Running a test

You can also run a test by running `php asmvc run:test` to run entire test or `php asmvc run:test ExampleTest` to just run test with file name `ExampleTest.php`.
