# PostCSS Font Display [![Build Status][ci-img]][ci]

[PostCSS] plugin to automatically add [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) css rule.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dkrnl/postcss-font-display.svg
[ci]:      https://travis-ci.org/dkrnl/postcss-font-display

```css
@font-face {
    /* Input example */
    font-family: 'My Font';
}
```

```css
@font-face {
    /* Output example */
    font-family: 'My Font';
    font-display: swap;
}
```

## Install

With [npm](https://npmjs.org/package/postcss-font-display) do:

```
npm install postcss-font-display --save
```

## Usage

```js
postcss([ require('postcss-font-display')({ display: 'swap', replace: false }) ])
```

### Advanced usage

```js
postcss([ require('postcss-font-display')([
  { display: 'swap', replace: false },
  { test: 'FontAwesome', display: 'block' },
]) ])
```

## Options

Option       | Type    | Default | Description |
------------ | ------- | ------- | ----------- |
`test`       | RegExp  | false   | Text pattern for [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family) css rule |
`display`    | String  | `swap`  | Value for new [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) css rule |
`replace`    | Boolean | `false` | Replace exists font-display rule |

***

See [PostCSS] docs for examples for your environment.
