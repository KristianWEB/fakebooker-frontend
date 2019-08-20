---
name: Feature request
about: Suggest an idea for this project
title: ''
labels: ''
assignees: ''

---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.

## Pull Request Squashing
Please, go through these steps before you submit a PR.

1. Make sure that your PR is not a duplicate.
2. If not, then make sure that:

  2.1. You have done your changes in a separate branch. Branches MUST have descriptive names that start with either the `fix/` or `feature/` prefixes. Good examples are: `fix/signin-issue` or `feature/issue-templates`.

  2.2. You have a descriptive commit message with a short title (first line).

  2.3. You have only one commit (if not, squash them into one commit).

  2.4. `npm test` doesn't throw any error. If it does, fix them first and amend your commit (`git commit --amend`).

3. **After** these steps, you're ready to open a pull request.

  3.1. Give a descriptive title to your PR.

  3.2. Provide a description of your changes.

  3.3. Put `closes #XXXX` in your comment to auto-close the issue that your PR fixes (if such).
