let postcss = require('postcss')

let plugin = require('./')

function run (input, output, options) {
  return postcss([plugin(options)]).process(input, { from: undefined })
    .then(result => {
      expect(result.css.replace(/\s+/g, ' ')).toEqual(output)
      expect(result.warnings()).toHaveLength(0)
    })
}

it('add new font-display', () => {
  return run(
    '@font-face { font-family: \'My Font\'; }',
    '@font-face { font-family: \'My Font\'; font-display: swap; }',
    { display: 'swap' }
  )
})

it('pass exists font-display', () => {
  return run(
    '@font-face { font-family: \'My Font\'; font-display: auto; }',
    '@font-face { font-family: \'My Font\'; font-display: auto; }',
    { display: 'swap', replace: false }
  )
})

it('replace exists font-display', () => {
  return run(
    '@font-face { font-family: \'My Font\'; font-display: auto; }',
    '@font-face { font-family: \'My Font\'; font-display: swap; }',
    { display: 'swap', replace: true }
  )
})

it('multiple options', () => {
  return run(
    [
      '@font-face { font-family: \'FontAwesome\'; }',
      '@font-face { font-family: \'My Font\'; }'
    ].join(''),
    [
      '@font-face { font-family: \'FontAwesome\'; font-display: block; }',
      '@font-face { font-family: \'My Font\'; font-display: swap; }'
    ].join(''),
    [{ test: 'FontAwesome', display: 'block' }]
  )
})
