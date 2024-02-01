```bash
#           _ __                                                __                  __                  _           
#    ____ _(_) /_____  ____  _____   _   ________________  ____/ /__     ___  _  __/ /____  ____  _____(_)___  ____ 
#   / __ `/ / __/ __ \/ __ \/ ___/  | | / / ___/ ___/ __ \/ __  / _ \   / _ \| |/_/ __/ _ \/ __ \/ ___/ / __ \/ __ \
#  / /_/ / / /_/ /_/ / /_/ (__  )   | |/ (__  ) /__/ /_/ / /_/ /  __/  /  __/>  </ /_/  __/ / / (__  ) / /_/ / / / /
#  \__, /_/\__/\____/ .___/____/    |___/____/\___/\____/\__,_/\___/   \___/_/|_|\__/\___/_/ /_/____/_/\____/_/ /_/ 
# /____/           /_/
```

# GitOps VSCode Extension

A collection of useful VS Code features in addition to the [GitOps Cli](https://github.com/mxcd/gitops-cli)

## Features

TODO: detail the features of the extension

## Development Setup

### Install PNPM

PNPM is required to install the dependencies of the extension.

```bash
npm install -g pnpm
```

In the root directory of the extension, run the following command to install the dependencies.

```bash
pnpm install
```

### Update PNPM

On Linux or macOS

```bash
pnpm add -g pnpm
or 
npm install -g pnpm
```

or on windows

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

Check the version

```bash
pnpm -v
```

### Install the Yo Generator

```bash
pnpm install -g yo generator-code
```

### Start the Generator

Done once, please skip if you are just cloning the repository.

```bash
yo code
```

# EXTRA RESOURCES

## Welcome to your VS Code Extension

## What's in the folder

* This folder contains all of the files necessary for your extension.
* `package.json` - this is the manifest file in which you declare your extension and command.
  * The sample plugin registers a command and defines its title and command name. With this information VS Code can show the command in the command palette. It doesn’t yet need to load the plugin.
* `extension.js` - this is the main file where you will provide the implementation of your command.
  * The file exports one function, `activate`, which is called the very first time your extension is activated (in this case by executing the command). Inside the `activate` function we call `registerCommand`.
  * We pass the function containing the implementation of the command as the second parameter to `registerCommand`.

## Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Run your command from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Hello World`.
* Set breakpoints in your code inside `extension.js` to debug your extension.
* Find output from your extension in the debug console.

## Make changes

* You can relaunch the extension from the debug toolbar after changing code in `extension.js`.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.

## Explore the API

* You can open the full set of our API when you open the file `node_modules/@types/vscode/index.d.ts`.

## Run tests

* Install the [Extension Test Runner](https://marketplace.visualstudio.com/items?itemName=ms-vscode.extension-test-runner)
* Open the Testing view from the activity bar and click the Run Test" button, or use the hotkey `Ctrl/Cmd + ; A`
* See the output of the test result in the Test Results view.
* Make changes to `test/extension.test.js` or create new test files inside the `test` folder.
  * The provided test runner will only consider files matching the name pattern `**.test.js`.
  * You can create folders inside the `test` folder to structure your tests any way you want.

## Go further

* [Follow UX guidelines](https://code.visualstudio.com/api/ux-guidelines/overview) to create extensions that seamlessly integrate with VS Code's native interface and patterns.
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code extension marketplace.
* Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
