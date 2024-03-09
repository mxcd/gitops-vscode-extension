//
// Left side bar tree view to see uncommitted secrets files that can be applied.
//

const vscode = require("vscode");
const utils = require("./utils");

class MyTreeDataProvider {
  constructor() {
    this._onDidChangeTreeData = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;
  }

  refresh() {
    this._onDidChangeTreeData.fire(undefined);
  }

  async getChildren() {
    const gitExtension = await vscode.extensions.getExtension("vscode.git");
    if (!gitExtension.isActive) {
      await gitExtension.activate();
    }
    const repository = await gitExtension.exports.getAPI(1).repositories[0];

    if (!repository) {
      utils.Message("Error", "No Git repository found.");
      return [];
    }

    const changes = await repository.diffWithHEAD();
    const modifiedFiles = changes.filter((change) => change.status !== "D");

    return modifiedFiles.map((change) => ({
      label: utils.getRelativePath(change.uri.fsPath),
      command: {
        command: "gitops-vs-toolpack.applySecrets",
        title: "Apply this GitOps secret",
        arguments: [utils.getWorkspacePath()],
      },
    }));
  }

  getTreeItem(element) {
    return {
      label: element.label,
      command: element.command,
    };
  }
}

function getDaTree(context) {
  const myTreeDataProvider = new MyTreeDataProvider();
  const myTreeView = vscode.window.createTreeView("GitOpsEditorView", {
    treeDataProvider: myTreeDataProvider,
  });

  const refreshTreeViewCommand = vscode.commands.registerCommand(
    "gitops-vs-toolpack.refreshTreeView",
    () => {
      myTreeDataProvider.refresh();
    }
  );

  // Create a refresh button in the UI
  const refreshButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );
  refreshButton.text = "$(sync~spin)";
  refreshButton.command = "gitops-vs-toolpack.refreshTreeView";
  refreshButton.tooltip = "Refresh Tree View";
  refreshButton.show();

  context.subscriptions.push(myTreeView, refreshTreeViewCommand, refreshButton);
}

module.exports = {
  getDaTree,
};
