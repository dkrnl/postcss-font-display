# PostCSS Font Display [![Build Status][ci-img]][ci]

[PostCSS] plugin add [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) css rule.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dkrnl/postcss-font-display.svg
[ci]:      https://travis-ci.org/dkrnl/postcss-font-display

```css
@font-face {
    font-family: 'My Font';
}
```

```css
@font-face {
    font-family: 'My Font';
    font-display: swap;
}
```

## Usage

```js
postcss([ require('postcss-font-display')({ display: 'swap', overload: false }) ])
```

## Options

Option       | Type    | Default | Description |
------------ | ------- | ------- | ----------- |
`display`    | String  | `swap`  | Value for new [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) css rule |
`overload  ` | Boolean | `false` | Overload exists font-display rule |

***

See [PostCSS] docs for examples for your environment.
