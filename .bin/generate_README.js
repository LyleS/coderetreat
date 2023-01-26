const path = require("path");
const { URL } = require("url");
const { runDevcontainerCliInFolder } = require("./_devcontainer");
const { languages } = require("./_languages");

const DEVCONTAINER_SPEC_EXTENSION = "github.com/rradczewski/kata-bootstraps";
const ROOT_DIR = path.resolve(__dirname, "../");

const OPEN_IN_CODESPACE_URL = new URL("https://github.com/codespaces/new");
OPEN_IN_CODESPACE_URL.searchParams.append("hide_repo_select", "true");
OPEN_IN_CODESPACE_URL.searchParams.append(
  "repo",
  "rradczewski/kata-bootstraps"
);

const OPEN_IN_GITPOD_URL = new URL("https://gitpod.io/");

const OPEN_IN_VSCODE_URL = new URL("vscode://vscode.git/clone");
OPEN_IN_VSCODE_URL.searchParams.append(
  "url",
  "https://github.com/rradczewski/kata-bootstraps.git"
);

const OPEN_IN_INTELLIJ = new URL(
  "jetbrains://idea/checkout/git?idea.required.plugins.id=Git4Idea&checkout.repo=https%3A%2F%2Fgitlab.com%2Fwith-humans%2Fdevops-workshop%2Finfrastructure.git"
);
OPEN_IN_INTELLIJ.searchParams.append(
  "checkout.repo",
  "https://github.com/rradczewski/kata-bootstraps.git"
);

const REDIRECT_URL = new URL(
  "https://rradczewski.github.io/kata-bootstraps/redirect.html"
);
const wrapInRedirect = (url) => {
  const redirectUrl = new URL(REDIRECT_URL);
  redirectUrl.searchParams.append("url", url);
  return redirectUrl;
};

const renderLanguages = async () => {
  const directories = await languages(ROOT_DIR);

  return Promise.allSettled(directories.map((dir) => renderLanguage(dir))).then(
    (results) =>
      results
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value)
        .join("\n")
  );
};

const renderLanguage = async (directory) => {
  const { stdout } = await runDevcontainerCliInFolder(directory, [
    "read-configuration",
  ]);

  const devcontainerSpec = JSON.parse(stdout);

  const actualDirectory = path.basename(
    devcontainerSpec.workspace.workspaceFolder
  );

  const kataCustomization =
    devcontainerSpec.configuration.customizations[DEVCONTAINER_SPEC_EXTENSION];

  const openAsCodespaceUrl = new URL(OPEN_IN_CODESPACE_URL);
  openAsCodespaceUrl.searchParams.append("ref", actualDirectory);

  const openInVsCodeUrl = new URL(OPEN_IN_VSCODE_URL);
  openInVsCodeUrl.searchParams.append("ref", actualDirectory);
  const wrappedOpenInVsCodeUrl = wrapInRedirect(openInVsCodeUrl);

  const openInGitpodIoUrl = new URL(OPEN_IN_GITPOD_URL);
  openInGitpodIoUrl.hash =
    "https://github.com/rradczewski/kata-bootstraps/tree/" + actualDirectory;

  return (
    `| <a alt="${devcontainerSpec.configuration.name}" href="./${actualDirectory}"><img width="100px" src="${kataCustomization.languageLogo}" /></a> ` +
    `| ${devcontainerSpec.configuration.name} ` +
    `| [Open in GitHub Codespace](${openAsCodespaceUrl})<br/>[Open in GitPod.io](${openInGitpodIoUrl})<br/>[Open locally in VSCode](${wrappedOpenInVsCodeUrl})`
  );
};

const layout = async (l) =>
  `# Curated Kata Bootstrap Projects

This repository contains curated starter projects for running katas. All projects are kept up-to-date automatically by [renovate](https://github.com/renovatebot/) and are based on [devcontainers](https://code.visualstudio.com/docs/remote/containers).

[Clone repository in IntelliJ](${wrapInRedirect(
    OPEN_IN_INTELLIJ
  )}) (requires [Jetbrains Toolbox](https://www.jetbrains.com/lp/toolbox/)) and select your language either by opening one of the subfolders as a project or by switching the branch.

|   |   |   |
|---|---|---|
${await renderLanguages()}

## Contributing a bootstrap

The general paradigm of this repository is to create a self-contained, minimal starter projects that are least likely to (silently) break in the future and can automatically be kept up-to-date.

Any bootstrap project may be added to this repository, if:

- The language is not yet present **or** the test-framework enables a different paradigm than the bootstraps already present for the language (e.g. a cucumber or mutation testing tool, not junit4)
- Dependencies and docker images are well-known and commonly used
    - Avoids using custom Dockerfile-based dev-containers
    - Uses only one testing framework and one assertion library
- A single failing test exists
- Version numbers are either \`latest\` or [renovate](https://github.com/renovatebot/) can pick them up automatically (e.g. don't use variables in \`pom.xml\` or elsewhere).

A bootstrap needs to contain a valid [\`.devcontainer.json\`](./java_junit5/.devcontainer/devcontainer.json) that configures a container with all appropriate tooling. Furthermore, the \`postCreateCommand\` needs to contain a shell command that, when executed, will verify that the test runner correctly runs and reports the single failure present.

## Other kata bootstraps

- [swkBerlin/kata-bootstraps](https://github.com/swkberlin/kata-bootstraps) - A huge collection of kata-bootstraps in plenty of languages with plenty of different frameworks
`;

const run = async () => {
  console.log(await layout());
};

run();
