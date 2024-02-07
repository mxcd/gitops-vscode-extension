//
// Main file for the extension: calls the applySecretsFileExplorer function and calls the tree view creation.
//

const Tree = require("./treeDataProvider");
const applySecretsFileExplorer = require("./applySecretsFileExplorer");

function activate(context) {
  // Create the tree view
  Tree.getDaTree(context);

  // Apply secrets to the selected file in the file explorer with a right click
  applySecretsFileExplorer(context);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
