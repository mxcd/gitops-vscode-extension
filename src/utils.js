const vscode = require("vscode");
const path = require("path");

// Get files and directories informations
function getWorkspacePath() {
  return vscode.workspace.rootPath;
}

function getRelativePath(filePath) {
  return path.relative(getWorkspacePath(), filePath);
}

function getAbsoluteFilePath() {
  return vscode.window.activeTextEditor?.document.fileName;
}

function getFileName() {
  return path.basename(getAbsoluteFilePath());
}

// GitOps command
function GitOpsApply() {
  return `gitops s -d "${getAbsoluteFilePath()}" a k8s --auto-approve`;
}

// Git commands
function GitAddCommit() {
  return `git add ${getAbsoluteFilePath()} && git commit -m "${GetCommitMessage()}"`;
}

function GetCommitMessage() {
  return `feat: Apply secrets to ${getFileName()}`;
}

// Message command
function Message(type, message) {
  return `vscode.window.show${type}Message(${message})`;
}

// Terminal command
function TerminalFactory() {
  if (!vscode.window.terminals[0]) {
    return vscode.window.createTerminal();
  }
  return vscode.window.terminals[0];
}

module.exports = {
  getWorkspacePath,
  getRelativePath,
  getAbsoluteFilePath,
  getFileName,
  GitOpsApply,
  GitAddCommit,
  Message,
  TerminalFactory,
};
