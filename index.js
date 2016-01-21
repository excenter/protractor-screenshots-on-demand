var fs = require('fs');
var path = require('path');

module.exports = {
  saveScreenshot: function(pathname){
      browser.takeScreenshot().then((png)=> {

        var file = path.resolve(pathname);
        fs.writeFileSync(file, png, { encoding: 'base64' }, console.log);
    });
  }
};
