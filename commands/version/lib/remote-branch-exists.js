"use strict";

const log = require("libnpm/log");
const childProcess = require("@lerna/child-process");

module.exports = remoteBranchExists;

function remoteBranchExists(gitRemote, branch, opts) {
  log.silly("remoteBranchExists");

  const remoteBranch = `${gitRemote}/${branch}`;

  try {
    childProcess.execSync("git", ["show-ref", "--verify", `refs/remotes/${remoteBranch}`], opts);
    return true;
  } catch (e) {
    return false;
  }
}
