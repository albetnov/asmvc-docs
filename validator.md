# ASMVC Validator

ASMVC Provides you a simple validator to help you validate user input in the form.

## Usage

To use Validator you can do it by:

```php
Validator::make([
    'field1' => 'rule',
    'field2' => ['multiple', 'rule']
]);
```

## How it works?

Validator will receive your array. Finding the request from array keys and validate it based on array values.

## Available Methods

List of Validator methods:

- `make`
  Allows you to make an validator rule based on field. Required parameter are `validate` with `array` as it's type. Specifying array keys and values is required. This method can be accessed directly via Helper with `makeValidate()` without the needs
  of specifying `Validator` class.

- `fails`
  This method will return `boolean` value depends on validation rule whenever it's success or not.<br>
  Example Usage:

```php
$validate = Validator::make([
    'name' => 'required',
    'password' => ['required', 'min:8']
]);

if($validate->fails()) {
    return redirect('/');
}
```

- `checkError`<br>
  This method will return a `boolean` value depends on fields have validation error or not. This method can be accessed directly via Helper with `checkError()` without the needs
  of specifying `Validator` class.

- `validateMsg`<br>
  This method will return a `string` value depends on which fields validation fails on. This method can be accessed directly via Helper with `validateMsg()` without the needs
  of specifying `Validator` class.

- `old`<br>
  This method will return a previous value if it's exist. This method only occured when a validation fails. With this method. You won't lose the previous field value.

## Examples

```php
File: PostController.php
--------------------------
public function submit() {
    $validate = Validator::make([
        'subject' => request()->input('subject'),
        'content' => request()->input('content')
    ]);
    if($validate->fails()) {
        return redirect('/create-post');
    }
}

```

```php
File: create-post.php
--------------------------

<form action="/submit" method="POST">
    <div class="mb-1">
        <label>Subject</label>
        <input type="text" name="subject" class="form-control <?= checkError('subject') ? 'is-invalid' : '' ?>" value="<?= old('subject') ?>">
        <?php if (checkError('subject')) {
        ?>
            <div class="invalid-feedback">
                <?= validateMsg('subject') ?>
            </div>
        <?php
        }
        ?>
    </div>
    <div class="mb-1">
        <label>Content</label>
        <textarea name="content" class="form-control <?= checkError('content') ? 'is-invalid' : '' ?>"><?= old('subject') ?></textarea>
        <?php if (checkError('content')) {
        ?>
            <div class="invalid-feedback">
                <?= validateMsg('content') ?>
            </div>
        <?php
        }
        ?>
    </div>
</form>
```
