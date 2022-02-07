# ASMVC Requests

Requests is a class also helpers that will help you fetching/getting user/http request through your apps.

## Usage

ASMVC provides 2 way to use `Requests`.

With function:

```php
request();
```

Or with a class:

```php
$request = new Requests;
```

You can also use `Requests` as a dependency injenction on your controller method.

```php
File: somecontroller.php

public function getInput(Requests $request){
    return $request->input('text');
}
```

## Available methods

List of available `Requests` method:

- `input`
Getting `$_POST` input given by user. Returning the escaped characters only. 
Available parameter are:
    - `field`
    Allowed value are: `string`
    - `escape` (Optional)
    Allowed value are `boolean`. Default: true.

- `upload`
Getting `$_FILES` input given by the user. Returning fully `$_FILES`.
Available parameter is `name` with allowed value is `string`.

- `query`
Getting `$_GET` input given by the user. Returning the escaped characters only.
Available parameter is `name` with allowed value is `string`.

- `currentURL`
Getting user's current full url.

> Next: [Validator](validator.md)