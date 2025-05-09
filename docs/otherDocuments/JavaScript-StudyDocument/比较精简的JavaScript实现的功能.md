# 比较精简的JavaScript实现的功能

> 1、获取浏览器cookie值

```javascript
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

cookie('_ga');
// Result: "GA1.2.1929736587.1601974046"
```

>  2、将RGB转换为16进制

```javascript
const rgbToHex = (r, g, b) =>
"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255);
// Result: #0033ff`
```



3、复制到剪切板（使用 navigator.clipboard.writeText 轻松将任何文本复制到剪贴板上）

```javascript
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard("Hello World");
```

> 4、检查日期是否有效

```javascript
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00");
// Result: true
```

> 5、找出一年中的某一天（即给出一个日期，程序给出属于本年的第多少天）

```javascript
const dayOfYear = (date) =>
Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date());
// Result: 272
```

> 6、将字符串首字母大写

```javascript
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

capitalize("follow for more")
// Result: Follow for more
```

> 7、计算两个日期之间相差的天数

```javascript
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
// Result: 366
```



> 8、清除所有cookie

```javascript
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.\*/, `=;expires=${new Date(0).toUTCString()};path=/`));
```

> 9、生成随机16进制

```javascript
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

console.log(randomHex());
// Result: #92b008
```

> 10、数组去重

```javascript
const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]
```

> 11、从URL中获取查询参数

```javascript
const getParameters = (URL) => {
URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
return JSON.stringify(URL);
};

getParameters(window.location)
// Result: { search : "easy", page : 3 }
```

> 12、从日期中获取“时分秒”格式的时间

```javascript
const timeFromDate = date => date.toTimeString().slice(0, 8);

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
// Result: "17:30:00"
```

> 13、确认奇偶数

```javascript
//通过数据%2来判断并返回布尔类型
const isEven = num => num % 2 === 0;

console.log(isEven(2));
// Result: True
```



> 14、求平值

```javascript
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

average(1, 2, 3, 4);
// Result: 2.5
```

> 15、回到顶部（适用于网页右下角快捷返回功能）

//通过将x、y设置为0来实现

```javascript
const goToTop = () => window.scrollTo(0, 0);

goToTop();
```

> 16、反转字符串

```javascript
const reverse = str => str.split('').reverse().join('');

reverse('hello world');
// Result: 'dlrow olleh'
```



> 17、检查数组是否为空



```javascript
//通过对数组长度判断来确定是否为空
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

isNotEmpty([1, 2, 3]);
// Result: true
```



>  18、获取用户选定的文本

```javascript
const getSelectedText = () => window.getSelection().toString();

getSelectedText();
```

> 19、打乱数组

```javascript
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]
```

> 20、检查用户是否处于暗模式

```javascript
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

console.log(isDarkMode) // Result: True or False
```