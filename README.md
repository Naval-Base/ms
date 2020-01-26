# @naval-base/ms
> Millisecond conversion utility

## Features

- Simply works.

## Install

```bash
pnpm install @naval-base/ms
```

## Usage

```js
ms('2 days')  // 172800000
ms('1d')      // 86400000
ms('10h')     // 36000000
ms('2.5 hrs') // 9000000
ms('2h')      // 7200000
ms('1m')      // 60000
ms('5s')      // 5000
ms('1y')      // 31557600000
ms('100')     // 100
ms('-3 days') // -259200000
ms('-1h')     // -3600000
ms('-200')    // -200
```

### From ms

```js
ms(60000)             // "1m"
ms(2 * 60000)         // "2m"
ms(-3 * 60000)        // "-3m"
ms(ms('10 hours'))    // "10h"
```

### Long format

```js
ms(60000, true)             // "1 minute"
ms(2 * 60000, true)         // "2 minutes"
ms(-3 * 60000, true)        // "-3 minutes"
ms(ms('10 hours'), true)    // "10 hours"
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@naval-base/ms** © [iCrawl](https://github.com/iCrawl), Released under the [MIT](https://github.com/iCrawl/kaori/blob/master/LICENSE) License.  
Authored and maintained by iCrawl.

> GitHub [@iCrawl](https://github.com/iCrawl) · Twitter [@iCrawlToGo](https://twitter.com/iCrawlToGo)
