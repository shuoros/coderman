# Contribution

if you want to contribute to the Coderman project, this contributing guide is helpful.

## start contributing

We use GitFlow for branching model on this project. You must have [git-flow](https://github.com/nvie/gitflow/wiki/Installation) installed on your machine.

To start contributing on Coderman:
- Fork Coderman's repo
- Clone your fork
- Start your feature branch by `git flow feature start <feature_name>` command
- Create your changes and commits
- Push your feature branch
- Create pull request

```bash
git clone <your-fork-repo-url>
cd Coderman
git flow feature start <feature_name>
// Create your changes and commits
git push origin feature/<feature_name>
```
and then make pull request.

### Idea
if you haven't any idea for contributing, you can see [Issues](https://github.com/shuoros/Coderman/issues) or [TODO file](TODO.md).

## Documentation
If you are adding/changing a feature, add/change documentation of that feature.

For example, If you are adding a new feature, add documentation for that in `doc/<Directory To That Feature>/<x>.md`.

## Release Notes
Write your changes into the [RELEASENOTES.md](RELEASENOTES.md) file(under the next release title).

For example:

```bash
## next release
- ... (Someone's name)
- ... (Someone's name)
- Fixed bug X (Your name)
- Added X (Your name)
```