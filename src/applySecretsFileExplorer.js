//
// Command to apply secrets to the selected file in the file explorer with a right click.
//

const vscode = require("vscode");
const utils = require("./utils");
const Tree = require("./treeDataProvider");

function applySecretsFileExplorer(context) {
  const disposable = vscode.commands.registerCommand(
    "gitops-vs-toolpack.applySecrets",
    async function (fileUri) {
      if (!vscode.workspace.workspaceFolders) {
        vscode.window.showErrorMessage(`You must be in a workspace to apply secrets`);
        return;
      }
      const relativePath = vscode.workspace.asRelativePath(fileUri);
      console.log(`applying secret ${relativePath}`);
      
      let terminal = utils.TerminalFactory();

      terminal.sendText(utils.GitOpsApply(relativePath));
      // terminal.sendText(utils.GitAddCommit());
      terminal.show();
      utils.Message("Information", "Secrets applied.");
    }
  );
  context.subscriptions.push(disposable);
}

module.exports = applySecretsFileExplorer;
