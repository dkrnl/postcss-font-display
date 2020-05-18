let postcss = require('postcss')

const defaultOptions = { display: 'swap', replace: false }

function optionsByFont (rule, options) {
  let font = null
  let result = defaultOptions
  rule.walkDecls('font-family', decl => {
    font = decl.value
    return false
  })
  if (font) {
    options.forEach(opt => {
      if (opt.test) {
        // eslint-disable-next-line security/detect-non-literal-regexp
        let pattern = new RegExp(opt.test)
        if (pattern.test(font)) result = opt
      } else {
        result = opt
      }
    })
  }
  return result
}

module.exports = postcss.plugin('postcss-font-display', options => {
  options = options || defaultOptions

  if (options && !Array.isArray(options)) {
    options = [options]
  }

  return root => {
    root.walkAtRules('font-face', rule => {
      let exists = false
      let fontOptions = optionsByFont(rule, options)

      rule.walkDecls('font-display', decl => {
        if (fontOptions.replace) {
          decl.value = fontOptions.display
        }
        exists = true
      })

      if (!exists) {
        rule.append({ prop: 'font-display', value: fontOptions.display })
      }
    })
  }
})
