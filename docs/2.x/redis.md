# Redis Support

ASMVC also provide you a basic support through `Redis`. If you need more then you could use [`phpredis`](https://github.com/phpredis/phpredis) come built-in with ASMVC!

## Available ASMVC's Redis Method.

> If you need advance method through Redis. You can use phpredis directly.

- `connect`<br>
  This method will connect your apps to Redis configured in `.env`.

- `checkKey`<br>
  Check if Redis key is exist. Available parameter are: 
  - `key`<br>
    Required parameter with type of `string`.
  - `get`<br>
    Optional parameter with type of `boolean`. Default: `false`. This parameter will alter `checkKey` return to value of it's key.

- `redisKey`<br>
    Get or insert a key. Available parameter are:
    - `key`<br>
    Required parameter with type of `string`. Return value will be key's value.
    - `value`<br>
    Optinal parameter with type of `string`. If filled, Return value will be `boolean`.
    - `list`<br>
    Optinal parameter with type of `boolean`. If filled, Return value will be `boolean`. This method will set a key you created as a list.
    - `expire`<br>
    Optinal parameter with type of `int`. If filled, Return value will be `boolean`. This method will set a key and it's expiration.
    
- `getExpires`<br>
    Required parameter with type of `string`. Return value is integer.

- `flush`<br>
    Erase a key or entire database. Available parameter are:
    - `key`<br>
    Optional parameter with type of `string`. If filled, `flush` method will only erase the key given.