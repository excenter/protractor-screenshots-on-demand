Based on http://neverfriday.com/2015/08/23/take-screenshots-protractor-selenium-webdriver/
and the incredible talent of:
https://github.com/omouse

This package is for running protractor tests with a selenium server.
when you're ready to take a screenshot enter
  `screenshot('path/to/screenshots.png');`

To make it work:

1. *[Create the folder structure you want your screenshots to export to]*
  Because I'm using it with a CI server, and don't want the png files to be stored in git, I created generated/screenshots folders, and added a .gitignore that simply contains '\*.png'
  The folder for the screenshots to export to must exist, or protractor will throw errors and fail tests.

2. *Declare screensot as a global function*
  in your conf.js file locate or create your onPrepare function.
  ``onPrepare: function() {

    }``
  inside your onPrepare, add this line:
  `` global.screenshot = require('protractor-screenshots-on-demand').saveScreenshot;``

3.
