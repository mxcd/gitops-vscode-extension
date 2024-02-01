```bash
#           _ __                                                __                  __                  _           
#    ____ _(_) /_____  ____  _____   _   ________________  ____/ /__     ___  _  __/ /____  ____  _____(_)___  ____ 
#   / __ `/ / __/ __ \/ __ \/ ___/  | | / / ___/ ___/ __ \/ __  / _ \   / _ \| |/_/ __/ _ \/ __ \/ ___/ / __ \/ __ \
#  / /_/ / / /_/ /_/ / /_/ (__  )   | |/ (__  ) /__/ /_/ / /_/ /  __/  /  __/>  </ /_/  __/ / / (__  ) / /_/ / / / /
#  \__, /_/\__/\____/ .___/____/    |___/____/\___/\____/\__,_/\___/   \___/_/|_|\__/\___/_/ /_/____/_/\____/_/ /_/ 
# /____/           /_/
```

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

### Edit the Extension

To start editing with Visual Studio Code, use the following commands:

```bash
code wit-devops-toolpack
```

Open vsc-extension-quickstart.md inside the new extension for further instructions
on how to modify, test and publish your extension.

If you do not have the node_modules folder, you can install all dependencies:

```bash
pnpm install
```

You are now ready to launch the extension by pressing F5 inside Visual Studio Code.
