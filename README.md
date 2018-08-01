# Introduction

This project provides a basic template or starting point to setup a React based project, using Webpack 4 (code name: legato ) 

I use this as a starting point for all React based projects I work on. For me, this project provides a flexible and extensible alternative to create-react-app (see https://reactjs.org/docs/create-a-new-react-app.html).

The initial "React application" provided in this project is pretty much the same thing create-react-app creates by default; or in other words, it's not much more than the React equivalent of Hello World. 

In short, this project provides a convenient starting point for most applications. I customize it as I need for whatever project I am working on, and I can control all of the aspects of the project, including the build. I am sure create-react-app is fine for some introductory situations (certainly far smarter people than I created it), but personally I find this a much better starting point. That's just me. I am sure there are plenty of deficiencies to my logic, but it has worked so far.

If you are looking for a total introduction to React, Webpack, web development, Java Script, etc, this is probably not the place. This project assumes you have some knowledge of all of those concepts. I use it for my own purposes, and it works for me.

# A few usage notes

To use this project, you may wish to install the latest npm node_modules (which may or may not work depending on the current state of the various modules). Start by deleting the package-lock.json, and possibly also package.json. Or just clear out the dependencies in package.json and adapt it for your needs. The current dependencies are more or less bare bones (although I am sure that is debatable). For example, there is no HTTP client like axios included, no package for the React router, etc. 

Any of which are typically easy to add, though some might require their own unique Webpack configuration. That part is up to you.

Your mileage might vary depending on the current state of whatever the latest and greatest npm node modules might be as they are always screwing around with in their own api's, breaking things, etc. In which case google is your friend to see if anyone else is running into these problems, and you can commiserate with others on a github issues list for whatever modules happens to have caused the latest problem. The module developers sometimes apologize for or sometimes defend the current state of things, and in any case usually help sort through the problem. And that is why they pay us as developers money: to solve problems.

I run into these kinds situations relatively frequently, and such is life in the world of web development with JS where APIs, modules, libraries and whatnot are being updated continuously. I periodically refresh the package.json in this project with the latest just to see where things are. Sometimes it just works. Sometimes it doesn't. 
 
If you decided to start from scratch by entirely deleting package.json, simply run "npm init" from the command line to create an initial package.json.

## Host requirements

Note I am assuming you already have Node installed on your machine and generally have familiary with it. I suspect it would be easy to use yarn rather than npm, but I have chosen npm.

At the moment, I am using node-v8.11.2-linux-x64 on my Ubuntu 18.04 host.

I haven't performed any testing on Windows or Apple hosts, and I have no intention of doing so anytime soon, but I likewise haven't intentially added any code that would preclude usage of this project on those hosts.

## Initial npm install commands?

Here are the npm install commands you could start with on a fresh package.json. In theory this could be the starting point. Customize these as you see the need.

```
$ cd <to this project>

$ npm install prop-types react react-dom react-hot-loader

$ npm install --save-dev autoprefixer babel-core babel-eslint babel-loader babel-polyfill babel-preset-env babel-preset-react babel-preset-stage-1 chalk cross-env css-loader eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react extract-text-webpack-plugin file-loader html-webpack-plugin postcss-loader rimraf style-loader url-loader webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge
```

## Start the project in your browser

To see the project in your browser, run this command:

```
$ npm run dev
```

That should start the application on your local host, by default using PORT=3000. And as you modify the code, the hot module replacement feature should just automatically cause the browser to update as well.

## Deployment

To build a deployment snapshot of your application, run this:

```
$ npm run build
```
But to succeessfully do so, note the problem with extract-text-webpack plugin 3.x described below.

And then look in the "dist" directory. You can test the contents of the "dist" directory locally, by using this simple node server:

git@github.com:esausilva/quick-node-server.git

```
$ cd <to this project>
$ npm run build
$ cd ~
$ git clone git@github.com:esausilva/quick-node-server.git
$ cd quick-node-server
$ cd public
$ rm -fr *
$ cp -R <path to this project>/dist/* .
$ cd ..
$ node server.js
```
By default, it starts a server on the local host on port 3002. Thus, in your browser, enter this address:

```
http://localhost:3002/
```

## Bundle analyzers

If you wish, you can also use the bundle analyzer scripts (see the package.json), which provide a graphical view of the relative sizes of all of the modules involved in your application, which can be useful when looking for way to optimize.

## Problems with hot module replacement?

If you run into problems getting hot module replacement to recognize changes made to the source code, meaning the contents of the browser are not being dynamically refreshed as you make edits, and you are on a Linux host, you may need to run this command (one time only).

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## Editor

I am currently using VS Code, looks at the moment it is version 1.25.1, though it is updated frequently. I have also installed the following extensions:

```
ES7 React/Redux/GraphQL/React-Native snippets by dsznajder
ESLint by Dirk Baeumer
And a few others related to git, github, npm, etc, which I won't list here.
```

## Chrome Extensions

I mostly use Chrome for my development. I have installed the following Chrome extensions:

```
React Developer Tools, version 3.2.4
Redux DevTools, version 2.15.3
JSON Formatter, version 0.6.0
```

## A few more usage notes:

* If you wish to split out more vendor modules, open the config/webpack.common.js file and edit the vendor field. For example, maybe something like this if you were to use the react router, firebase, re-base (assuming you installed those node modules). 

In other words, this is just an idea (customize as you see fit).

```
vendor: ['react', 'react-dom', 'react-router-dom', 'firebase', 're-base'],
```

* If you wish to use stylus you could open the config/webpack.dev.js
and change the module rules to have this entry (again, just an idea):

```
		rules: [
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader', 'stylus-loader'],
			},
		],
```

And the config/webpack.prod.js rules might look like this:

```
	rules: [
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				/* ExtractTextPlugin moves all the required *.css modules in
				   entry chunks into a separate CSS file. So your styles are
				   no longer inlined into the JS bundle, but in a separate
				   CSS file (styles.css). If your total stylesheet volume is
				   big, it will be faster because the CSS bundle is loaded in
				   parallel to the JS bundle. */
				loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'stylus-loader'])
			},
		],
```

* I ran into a problem with a 3.x version of extract-text-webpack-plugin. It seems at the moment at least, it hasn't yet been updated for Webpack 4. See: https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701 

In order to be able to create a production build, I had to replace it with 4.0.0-beta.0.

```
$ npm install extract-text-webpack-plugin@4.0.0-beta.0
```

* There are some pretty decent webpack-react tutorials out there. Here are a couple I found useful:

https://webpack.js.org/concepts/

https://www.valentinog.com/blog/react-webpack-babel/

https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75

https://esausilva.com/2018/01/13/learn-webpack-for-react/

https://survivejs.com/webpack/introduction/ (not specific to React)

https://webpack.academy/ (not specific to React)

https://youtu.be/jUTE7lmrS70 (video by Sean Larkin)


* Webpack is the mechanism that wraps around the whole thing from a "build perspective". It handles the module bundling, transpiling, configuration details, makes development easier with a web development server, determines how assets are bundled, CSS compilation, deployment etc. I have heavily commented the webpack files. You can refer to those for more details.

# Styling

## Plain old CSS

Here is a simple CSS file example, for example call it app.css:

```
html, body, #root, .room {
	height: 100%;
	margin: 0;
  }
  .lit {
	background-color: white;
	color: black;
  }
  .dark {
	background-color: black;
	color: white;
  }
```

And here is how it might be used in a React component:

```
import './app.css';

class MyComponent extends Component {
	state = {
		someStateVar: true,
	}

	render() {
		const brightness = this.state.someStateVar ? 'lit' : 'dark';
		return (
			<div className={`room ${brightness}`}>
etc ...
```

# Credits

I gathered the information to pull all of this together from various places, far too many to count, nor do I even know where to start to give individual credit. If you feel you need credit, let me know.

That said, Easu Silva's blog really helped me get started on the Webpack concepts. His tutorial on Webpack is fantastic. See his blog here: https://esausilva.com/. He based his work on https://webpack.academy/ by Sean Larkin, which is also great. 
