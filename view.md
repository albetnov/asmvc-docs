# ASMVC View

> ASMVC Provide you a simple view helper to help organizing your views.

## Met with View Class

ASMVC has given you a View class. You can use it by:

```php
$view = new Views();
```

or use our helper:

```php
views();
```

## Available Methods

- [include](#include)
- [extends](#extends)
- [section](#section)
- [getSection](#getSection)
- [match](#match)

> Note: method usage example will use `views()` helper for default. You can still use the class by doing `$var->method()`.

### include

Including a view. Starting point: `App/Views`.

Usage:

```php
<?= views()->include('footer') ?>
```

> Note: These way below are supported by all views paths specific parameter.

If you need to include inside folder you can do it by:

```php
<?= views()->include('folder/footer') ?>
```

Or:

```php
<?= views()->include('folder.footer') ?>
```

### extends

Extending a view. This method require another view to have `section` method to apply.

Usage:

```php
<?= views()->extends('layout.main') ?>
```

### section

Defining a section.

Usage:

One Liner:

```php
<?= views()->section('title', 'Welcome') ?>
```

More than one line:

```php
<?= views()->section('content') ?>
<h1>Some element</h1>
<?= views()->endSection() ?>
```

### getSection

A method to get a section.

Usage:

```php
<title><?= views()->getSection('title') ?></title>
```

### match

A method that will return value if the URL Condition met.

Usage:

```php
<li class="<?= views()->match('/home', 'active') ?>">Home</li>
```

## Example

Here's some example that taking advantage of entire ASMVC View Method.

Directory Structure:

```text
.
└── App
    └── Views
        └── layouts
            ├── header.php
            ├── footer.php
            ├── main.php
        ├── home.php
```

`header.php`:

```php
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= asset(BS5_CSS) ?>">
    <title>Example</title>
</head>

<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- Container wrapper -->
        <div class="container-fluid">
            <!-- Toggle button -->
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Navbar brand -->
                <a class="navbar-brand mt-2 mt-lg-0" href="#">
                    <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15" alt="MDB Logo" loading="lazy" />
                </a>
                <!-- Left links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link <?= views()->match('/dashboard', 'active') ?>">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                </ul>
                <!-- Left links -->
            </div>
            <!-- Collapsible wrapper -->
            <!-- Right elements -->
        </div>
        <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
```

`footer.php`:

```php
<!-- Footer -->
<footer class="text-center text-lg-start bg-light text-muted">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
            </a>
        </div>
        <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
        <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
                <!-- Grid column -->
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <!-- Content -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem me-3"></i>Company name
                    </h6>
                    <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        Products
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Angular</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">React</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Vue</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Laravel</a>
                    </p>
                </div>
                <!-- Grid column -->
            </div>
            <!-- Grid row -->
        </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
</footer>
<!-- Footer -->

</body>

</html>
```

`main.php`:

```php
<?= views()->include('layouts.header') ?>
<div class="card">
    <?= views()->getSection('content') ?>
</div>
<?= views()->include('layouts.footer') ?>
```

`home.php`:

```php
<?= views()->extends('layouts.main');
views()->section('content')
?>
<div class="card-title">
    Hello
</div>
<div class="card-body">
    This is example
</div>
<?= views()->endSection() ?>
```
