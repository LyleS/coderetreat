# Curated Kata Bootstrap Projects

This repository contains curated starter projects for running katas. All projects are kept up-to-date automatically by [renovate](https://github.com/renovatebot/) and are based on [devcontainers](https://code.visualstudio.com/docs/remote/containers).

[Clone repository in IntelliJ](jetbrains://idea/checkout/git?idea.required.plugins.id=Git4Idea&checkout.repo=https%3A%2F%2Fgitlab.com%2Fwith-humans%2Fdevops-workshop%2Finfrastructure.git&checkout.repo=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git) (requires [Jetbrains Toolbox](https://www.jetbrains.com/lp/toolbox/))

|   |   |   |
|---|---|---|
| <a alt="Dotnet" href="./dotnet_xunit"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" /></a> | Dotnet | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=dotnet_xunit)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=dotnet_xunit)
| <a alt="Elixir" href="./elixir"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" /></a> | Elixir | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=elixir)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=elixir)
| <a alt="Go" href="./golang"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" /></a> | Go | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=golang)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=golang)
| <a alt="Java" href="./java_junit5"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /></a> | Java | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=java_junit5)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=java_junit5)
| <a alt="Kotlin" href="./kotlin_kotlintest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" /></a> | Kotlin | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=kotlin_kotlintest)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=kotlin_kotlintest)
| <a alt="NodeJS" href="./nodejs_jest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></a> | NodeJS | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=nodejs_jest)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=nodejs_jest)
| <a alt="Python3" href="./python_pytest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /></a> | Python3 | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=python_pytest)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=python_pytest)
| <a alt="Ruby" href="./ruby_rspec"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" /></a> | Ruby | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=ruby_rspec)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=ruby_rspec)
| <a alt="Rust" href="./rust"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" /></a> | Rust | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=rust)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=rust)
| <a alt="Typescript" href="./typescript_jest"><img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></a> | Typescript | [Open in GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=rradczewski%2Fkata-bootstraps&ref=typescript_jest)<br/>[Open in VSCode (locally)](vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Frradczewski%2Fkata-bootstraps.git&ref=typescript_jest)

## Contributing a bootstrap

The general paradigm of this repository is to create a self-contained, minimal starter projects that are least likely to (silently) break in the future and can automatically be kept up-to-date.

Any bootstrap project may be added to this repository, if:

- The language is not yet present **or** the test-framework enables a different paradigm than the bootstraps already present for the language (e.g. a cucumber or mutation testing tool, not junit4)
- Dependencies and docker images are well-known and commonly used
    - Avoids using custom Dockerfile-based dev-containers
    - Uses only one testing framework and one assertion library
- A single failing test exists
- Version numbers are either `latest` or [renovate](https://github.com/renovatebot/) can pick them up automatically (e.g. don't use variables in `pom.xml` or elsewhere).

A bootstrap needs to contain a valid [`.devcontainer.json`](./java_junit5/.devcontainer/devcontainer.json) that configures a container with all appropriate tooling. Furthermore, the `postCreateCommand` needs to contain a shell command that, when executed, will verify that the test runner correctly runs and reports the single failure present.

## Other kata bootstraps

- [swkBerlin/kata-bootstraps](https://github.com/swkberlin/kata-bootstraps) - A huge collection of kata-bootstraps in plenty of languages with plenty of different frameworks

