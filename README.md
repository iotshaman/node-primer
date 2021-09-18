# Javascript Primer

This github project is intended as a quick primer course on Javascript. We won't spend much time describing "how" to code in javascript, since this is something that is readily available through tutorials. Instead, we will focus on higher-level concerns, such as the difference between executing Javascript in Node JS vs. a Web Browser, and how to execute a javascript file in both Node JS and a Web Browser. 

## Javascript Contexts

Javascript files have to be "executed" in some "context". There are two common contexts where javascript typically runs: Node JS, and a Web Browser.

### Running Javascript in the Browser Context

When you load a web page in a browser, it looks through the entire HTML file to find "script tags" that look like this:

```html
<script type="text/javascript" src="/some/file.js">
```

Whenever it finds a script tag, with `type="text/javascript`, it will load the resource located in the "src" attribute (for example, "/some/file.js"). If the "src" attribute **does not** start with "http" or "https" it will assume that the domain is the same as the HTML file; so, for the above example, if the HTML file was loaded from "https://iotshaman.com", the full script path would be "https://iotshaman.com/some/file.js".

When the browser loads these resources, it makes all of the variables (and functions) available in the "global" scope of the browser, meaning 1 file can reference a variable (or function) in another file, so long as the script that is referencing the other script's variable is loaded **after** the script with the desired variable. In other words, script order matters. So, for example, if "b.js" references a variable (or function) in "a.js", the following would throw an error:

```html
<head>
  <script type="text/javascript" src="b.js"></script>
  <script type="text/javascript" src="a.js"></script>
</head>
```

However, the below would work, since the dependent script was loaded second:

```html
<head>
  <script type="text/javascript" src="a.js"></script>
  <script type="text/javascript" src="b.js"></script>
</head>
```

### Running Javascript in Node JS Context

To run (execute) something in Node JS, you must manually call the "node" program in a command-line terminal (aka. CLI), then provide the file name as the first argument (for example, "node index.js"); the most common CLI's used to execute node files (in Windows) are 'CMD' and 'Git Bash'. 

If your cli's current folder is not the same folder where your file is located, you must provide the file's folder path as well (for example, "node C:\Users\cwebb\source\sample\index.js").

Consider the following folder structure (located at C:\Users\cwebb\source):

```
sample
|__index.js
|__README.md
```

if your CLI's "current working directory" is in the folder "C:\Users\cwebb\source", there are a couple ways you could execute "index.js":

```sh
# using the full folder path
node C:\Users\cwebb\source\sample\index.js

# using the './' shortcut, which means "starting in the current working directory"
node ./sample/index.js

# navigate to the folder, then execute
cd ./sample
node index.js
```

*Note:* you may want to experiment with this, as different CLI's have slightly different rules; for example, some CLI's prefer forward slashes (/) instead of backward slashes (\), and vice-versa.

## Node JS Packages

Javascript files can be combined to form a "package". Packages in Node JS are defined in a "package.json" file, and are easy to create and edit, using either a CLI, or by using a text editor to create / modify the file manually; in this section, we will do both.

### Creating Node JS Packages

Consider the following folder structure (located at C:\Users\cwebb\source):

```
sample
|__index.js
|__README.md
|__services
|____user.service.js
```

To create a Node JS package, you could open the "C:\Users\cwebb\source\sample" folder in a CLI, then execute the following command:

```sh
npm init
```

After running this command you will be prompted for information, like the name of the package, version, description, etc; you can simply click enter, without entering anything, for each prompt, and it will use a default.

```
sample
|__index.js
|__package.json
|__README.md
|__services
|____user.service.js
```

### Package Scripts

If you open the "package.json" file in your IDE (or text editor) it should look like this, assuming you used the default for each prompt:

```json
{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

You may notice that there is a default "script", called test. Scripts are short-hand ways to execute CLI programs (anything you can run in a CLI can be run in a npm script). If you run `npm test` in a CLI (in your package folder) it will run the "echo" program, passing a message as an argument, then exit (as a note, if you pass 0 to the exit program, it means everything worked successfully, but any other value means an error occured and will result in additional console output). 

Lets remove this "test" script, and put a "start" script in its place. Your updated package.json file should look like:

```json
{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC"
}
```

Now, if you run `npm start` in a CLI (in your package folder) it will tell Node JS to execute the file "index.js".

*IMORTANT*: if you create a "script" in your package, and the script is **not** titled "start" or "test", you must use `node run [script name]` to execute the script (notice the addition of the word 'run'). 

### Installing Dependencies

Dependencies are other npm packages that you install into your own package; this allows you to extend your code by using code published by other people / companies (aka 3rd party modules). You can also publish your own packages, and install them into other packages; if you ever write code and think 'this would be really helpful in many differenct projects', this is a good indication you should separate the logic into its own package and publish.

Node JS comes pre-packaged with its own package manager, npm (Node Package Manager), and by default all packages are published to [https://npmjs.org/](npmjs.org/); it is possible to use other package managers, and to publish code to other "repositories", but for now we will assume all packages are downloaded, using npm, from npmjs.org. 

There are 2 ways to install a dependency into a node package: by using the npm CLI program, or by updating the "package.json" file and running `npm install`.

Let's use the CLI to install a dependency. The dependency we will be installing is "moment-timezone", which allows developers to display datetimes in specific timezones. For more information on moment-timezone, check out the [https://www.npmjs.com/package/moment-timezone](npmjs.org documentation). Using a CLI, navigate to your project folder then run the following command:

```sh
npm install moment-timezone --save
```

*Note*: In the above command we are telling npm to install the package "moment-timezone", the also instructing it to save the package to the package.json file in your project. After running the above command, you should notice a new folder called 'node_modules', where the installed package resides. Also, if you open your package.json file, it should now look like this:

```json
{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "node index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment-timezone": "^0.5.33"
  }
}
```

Notice the inclusion of a new property called "dependencies", where a "moment-timezone" property exists; the value in the "moment-timezone" property indicates the version of the package that is installed. If you wish to install a different version, you can simply change the version value in package.json then run `npm install`.

If you dont want to use the CLI to install dependencies, you can manually update the "dependencies" object, following the above format, then run `npm install` in a CLI. 

*Note:* in this section we only talked about npm "dependencies", but we didn't talke abot "devDependencies". We don't need to concern ourselves with dev dependencies for the moment, but just know that there is another (optional) property in "package.json", called "devDependencies", where you can install dependencies that won't be downloaded when other people install your package. This allows developers to install local tooling to improve their development experience, without having to bog down people trying to install your package with testing-only tools.

### Importing dependencies into javascript files

In the above section we learned how to save dependencies to a package; in this section, we will show you how to import these dependencies into a javascript file, so you can use them.

To import another package into a javascript file, first make sure you have installed it (see above section). Next, open the javascript file where you would like to use this package, and add the following to the top of the file (imports are almost always located at the top of a code file, in most all coding languages).

```js
var moment = require("moment-timezone");
```

Now you can use the "moment" object in you javascript file. Below is an example of how to use moment to output the current date, in central time zone.

```js
var moment = require("moment-timezone");
var currentTimeCentral = moment().tz("America/Chicago").format();
console.log("Current Time (CST): " + currentTimeCentral);
```