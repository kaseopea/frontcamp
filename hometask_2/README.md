# EPAM Frontcamp 2017 (Gomel Edition)

## Hometask 2 - Babel
**Mentee - Vitali Rusau**

## How to run
* **npm install** - install dependencies
* **npm run build** - build js files with preconfigured Babel

## How to test Babel plugin
* Plugin is located in **node_modules/babel-plugin-process-env**
* Make **npm install** inside plugin folder
* Use **npm run babel-plugin-build** to build files inside **babel-plugin-sandbox folder**

## Used stuff
* Used preset ES2015 (instead of latest babel preset - env)
* Used installed Prettier plugin in Visual Studio Code (because we do not use build tool like Webpack)
* Used IE10.Win7.For.Windows.VirtualBox virtual machine with IE10
* Used a Babel polyfill to use Promises. (https://babeljs.io/docs/usage/polyfill/)
* Used a window.fetch JavaScript polyfill. (http://github.github.io/fetch/)
* Removed additional features used - css variables, SVG SMIL animation and Grid layout
* Moved to SASS instead plain CSS, compiled by Koala App (http://koala-app.com)