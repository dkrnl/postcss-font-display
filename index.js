var postcss = require('postcss');

module.exports = postcss.plugin('postcss-font-display', function (options) {
    options = options || { display: 'swap', replace: false };

    return function (root) {

        root.walkAtRules('font-face', (rule) => {

            var exists = false;
            rule.walkDecls('font-display', (decl) => {
                if (options.replace) {
                    decl.value = options.display;
                }
                exists = true;
            });

            if (!exists) {
                rule.append({ prop: 'font-display', value: options.display });
            }

        });

    };
});
