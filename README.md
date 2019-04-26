# remoteclick

Ajaxify partial content easily

Under development...


### Compatibility

If your browser matrix includes IE11 and below, you will need to take care of the following browser and es6 features on your own behalf:

`Element.prototype.closest`
`Element.prototype.classList`
`URL`
`Symbol`

Refer to the following for a working set of polyfill packages:

```js
import '@babel/polyfill';
import 'url-polyfill';
import 'mdn-polyfills/Element.prototype.closest';
import 'mdn-polyfills/Element.prototype.classList';
import 'isomorphic-fetch';
```
