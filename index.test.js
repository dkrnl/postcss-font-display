var postcss = require('postcss');

var plugin = require('./');

function run(input, output, options) {
    return postcss([ plugin(options) ]).process(input)
        .then(result => {
            expect(result.css.replace(/\s+/g, ' ')).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('add new font-display', () => run(
    '@font-face { }',
    '@font-face { font-display: swap }',
    { display: 'swap' }
));

it('pass exists font-display', () => run(
    '@font-face { font-display: auto }',
    '@font-face { font-display: auto }',
    { display: 'swap', overload: false }
));

it('overload exists font-display', () => run(
    '@font-face { font-display: auto }',
    '@font-face { font-display: swap }',
    { display: 'swap', overload: true }
));

