# rstrings

Generate some random strings.  

Uses the node.js `crypto.randomBytes` function to generate random data.


## Installation

This is a [node.js](https://nodejs.org) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install rstrings
```

## Usage

The store factory function is used to create a new store.  

### **<span style="color:blue">generate(len, charset)</span>**  
Generate a random string with a length of `len` using the characters specified in `charset`.

```javascript
const rstrings = require("rstrings");

var rdata = rstrings.generate(30, "ABCDEFGHIJK");
```

### Predefined Character Sets:
The following predefined character sets exist and are used by the shortcut functions.

```javascript
const ALPHAUPPER     = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHALOWER     = "abcdefghijklmnopqrstuvwxyz";
const ALPHAMIXED     = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHANUMUPPER  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const ALPHANUMLOWER  = "abcdefghijklmnopqrstuvwxyz0123456789";
const ALPHANUMMIXED  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const NUMERIC        = "0123456789";
const HEX            = "0123456789ABCDEF";
```

### **<span style="color:blue">alphaUpper(len)</span>**  
Shortcut function uses the `ALPHAUPPER` character set.

```javascript
var rdata = rstrings.alphaUpper(30);
```

### **<span style="color:blue">alphaLower(len)</span>**  
Shortcut function uses the `ALPHALOWER` character set.

```javascript
var rdata = rstrings.alphaLower(30);
```

### **<span style="color:blue">alphaMixed(len)</span>**  
Shortcut function uses the `ALPHAMIXED` character set.

```javascript
var rdata = rstrings.alphaMixed(30);
```

### **<span style="color:blue">alphaNumUpper(len)</span>**  
Shortcut function uses the `ALPHANUMUPPER` character set.

```javascript
var rdata = rstrings.alphaNumUpper(30);
```

### **<span style="color:blue">alphaNumLower(len)</span>**  
Shortcut function uses the `ALPHANUMLOWER` character set.

```javascript
var rdata = rstrings.alphaNumLower(30);
```

### **<span style="color:blue">alphaNumMixed(len)</span>**  
Shortcut function uses the `ALPHANUMMIXED` character set.

```javascript
var rdata = rstrings.alphaNumMixed(30);
```

### **<span style="color:blue">numeric(len)</span>**  
Shortcut function uses the `NUMERIC` character set.

```javascript
var rdata = rstrings.numeric(30);
```

### **<span style="color:blue">hex(len)</span>**  
Shortcut function uses the `HEX` character set.

```javascript
var rdata = rstrings.hex(30);
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

