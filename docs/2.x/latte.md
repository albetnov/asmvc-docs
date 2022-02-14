# Latte

Latte is a view engine created with PHP. It's provide a beauty and easy to use syntax.

Latte is set as default by ASMVC cause the simplicity it's provide.

## How to use Latte?

Latte does come by default in `2.x`. However if you can't use latte for a reason. You may need to open your `.env.` and edit these following line:

```.env
APP_VIEWS_ENGINE=latte
```

Next whenever you use `view()` helper ASMVC will set it to Latte.

## Available Methods

For available Latte Methods. Please consult the following: [Latte Documentation](https://latte.nette.org/en/guide)

## Provided methods

ASMVC does come with some helper function builted in your Latte.

```php
{csrf()}
```

Usage: an equavalent usage of `csrf_field()`. This function will return a html field including tokens for you. Possible optional parameter are `$route` if you use Paragonie, this parameter is required. This parameter should contain your URL Target or Form Action URL.

```php
{validateMsg()}
```

Usage: Another equavalent usage of `validateMsg()`. This function will return validation error messages. Required parameter are `$field`. Should contain your input name.
