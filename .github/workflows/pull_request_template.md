# Semantic pull request template

This repository uses [semantic release](https://semantic-release.gitbook.io/semantic-release/) for automatically managing changelogs, versions and GitHub releases. This PR must follow the below semantic release rules.

<br />

## Header

The title must follow the naming scheme `type(scope): Title`, e.g. `feat(component-xyz): Added click event`.

### Types

Available types can be found [here](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type).

### Scopes

The scope is optional but you can set it e.g. to the component or feature that this PR is about. Setting the scope to `no-release` will not trigger a semantic release after the PR is merged.

<br />

## Body

Describe all important changes of this PR in present tense.

<br />

## Footer

Insert an empty line between the PR body (description) and the footer. The footer contains information about breaking changes and closed issues.

If the PR contains breaking changes (not backwards-compatible) you must add the keyword `BREAKING CHANGE:`. For example:

`BREAKING CHANGE: Removed property "myProp" from component XYZ`
