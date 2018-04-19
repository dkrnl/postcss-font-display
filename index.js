var postcss = require('postcss');

module.exports = postcss.plugin('postcss-font-display', function (options) {
    options = options || { display: 'swap', overload: false };

    return function (root) {

        root.walkAtRules('font-face', (rule) => {

            var exists = false;
            for (let decl of rule.nodes) {
                if (decl.prop === 'font-display') {
                    if (options.overload) {
                        decl.value = options.display;
                    }
                    exists = true;
                }
            }

            if (!exists) {
                rule.append({ prop: 'font-display', value: options.display });
            }

        });

    };
});
