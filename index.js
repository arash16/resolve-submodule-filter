var path = require('path');
var fs = require('fs');

module.exports = function (pkg, fullPath, relativePath) {
    if (fs.existsSync(fullPath + '.js'))
        return relativePath;

    var indexDir = pkg.module || pkg['jsnext:main'] || pkg.browser || pkg.main;
    if (indexDir) {
        if (/\.js$/.test(indexDir))
            indexDir = path.dirname(indexDir);

        if (!relativePath.startsWith(indexDir))
            relativePath = path.join(indexDir, relativePath);
    }
    return relativePath;
};
