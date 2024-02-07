//
// Command to apply secrets to the selected file in the file explorer with a right click.
//

const vscode = require("vscode");
const utils = require("./utils");
const Tree = require("./treeDataProvider");

function applySecretsFileExplorer(context) {
  const disposable = vscode.commands.registerCommand(
    "gitops-vs-toolpack.applySecrets",
    async function () {
      let terminal = utils.TerminalFactory();

      if (!vscode.workspace.workspaceFolders) {
        utils.Message("Error", "You must be in a workspace to apply secrets");
        return;
      }

      if (
        !vscode.window.activeTextEditor.document.fileName.endsWith(
          ".secret.enc.yml"
        )
      ) {
        utils.Message("Error", "No secrets to apply in this file.");
        return;
      }

      terminal.sendText(utils.GitOpsApply());
      terminal.sendText(utils.GitAddCommit());
      terminal.show();
      utils.Message("Information", "Secrets applied to the file.");
    }
  );
  context.subscriptions.push(disposable);
}

module.exports = applySecretsFileExplorer;
