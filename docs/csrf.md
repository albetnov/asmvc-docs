# CSRF

> CSRF is a Cross Site Request Forgery attack. This attack can be very dangerous. As this attack works by exploit web application trust.
> More detail can be found out in [Wikipedia]("https://en.wikipedia.org/wiki/Cross-site_request_forgery")

ASMVC provides you 2 ways to handle with CSRF. Let's dig what is it.

## Paragonie Anti-CSRF

> ASMVC highly advised you to use Paragonie's Anti-CSRF library since it's a well made library.

Paragonie is set to default in example of env. But in case it's not, to use paragonie, you can first up setting it on your `.env` file.

```.env
APP_CSRF_DRIVER=paragonie
```

### Usage

```latte
File: login.latte
---------------------
<form action="{url('/login')}">
    {csrf('/login')}
</form>
```

`csrf()` require one arguments. This arguments should match your form action.

## ASMVC CSRF

If you're building a simple application. You may can use a simple CSRF provided by ASMVC. To use it you can setting
it on your `.env` file first:

```.env
APP_CSRF_DRIVER=asmvc
```

### Usage

```latte
File: login.latte
---------------------
<form action="{url('/login')}">
    {csrf()}
</form>
```

`csrf()` for ASMVC accepts no arguments.
