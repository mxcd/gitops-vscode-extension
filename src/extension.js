"use strict";

const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "gitops-vs-toolpack.applySecrets",
    function () {
      if (!vscode.workspace.workspaceFolders) {
        vscode.window.showErrorMessage(
          "You must be in a workspace to apply secrets"
        );
        return;
      }

      if (
        !vscode.window.activeTextEditor.document.fileName.endsWith(
          ".secret.enc.yml"
        )
      ) {
        vscode.window.showErrorMessage("No secrets to apply in this file.");
        return;
      }

      vscode.window.showInformationMessage(
        "Applying secrets to the selected file: " +
          vscode.window.activeTextEditor.document.fileName
      );
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {
  console.log("deactivated");
}

module.exports = {
  activate,
  deactivate,
};
