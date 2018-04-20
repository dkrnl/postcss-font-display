var postcss = require('postcss');

var plugin = require('./');

function run(input, output, options) {
    return postcss([ plugin(options) ]).process(input, { from: undefined })
        .then(result => {
            expect(result.css.replace(/\s+/g, ' ')).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('add new font-display', () => run(
    '@font-face { font-family: \'My Font\'; }',
    '@font-face { font-family: \'My Font\'; font-display: swap; }',
    { display: 'swap' }
));

it('pass exists font-display', () => run(
    '@font-face { font-family: \'My Font\'; font-display: auto; }',
    '@font-face { font-family: \'My Font\'; font-display: auto; }',
    { display: 'swap', replace: false }
));

it('replace exists font-display', () => run(
    '@font-face { font-family: \'My Font\'; font-display: auto; }',
    '@font-face { font-family: \'My Font\'; font-display: swap; }',
    { display: 'swap', replace: true }
));

