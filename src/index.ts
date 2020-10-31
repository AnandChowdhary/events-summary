import { debug, getInput, setFailed, setOutput } from "@actions/core";
import { getOctokit } from "@actions/github";

const token = getInput("token") || process.env.GH_PAT || process.env.GITHUB_TOKEN;

export const run = async () => {
  if (!token) throw new Error("GitHub token not found");
  const octokit = getOctokit(token);

  const ms: string = getInput("milliseconds");
  debug(`Waiting ${ms} milliseconds ...`);

  debug(new Date().toTimeString());
  debug(new Date().toTimeString());

  setOutput("time", new Date().toTimeString());
};

run()
  .then(() => {})
  .catch((error) => {
    console.error("ERROR", error);
    setFailed(error.message);
  });
