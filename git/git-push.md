# git push

```shell
warning: push.default is unset; its implicit value has changed in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the traditional behavior, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

Since Git 2.0, Git defaults to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)
```

`push.default`的可选值: `nothing`, `current`, `upstream`, `simple`, `matching`

> https://git-scm.com/docs/git-config

> Defines the action git push should take if no refspec is explicitly given. Different values are well-suited for specific workflows; for instance, in a purely central workflow (i.e. the fetch source is equal to the push destination), upstream is probably what you want. Possible values are:

> - `nothing` - do not push anything (error out) unless a refspec is explicitly given. This is primarily meant for people who want to avoid mistakes by always being explicit.

> - `current` - push the current branch to update a branch with the same name on the receiving end. Works in both central and non-central workflows.

> - `upstream` - push the current branch back to the branch whose changes are usually integrated into the current branch (which is called @{upstream}). This mode only makes sense if you are pushing to the same repository you would normally pull from (i.e. central workflow).

> - `simple` - in centralized workflow, work like upstream with an added safety to refuse to push if the upstream branch’s name is different from the local one. When pushing to a remote that is different from the remote you normally pull from, work as current. This is the safest option and is suited for beginners. This mode has become the default in Git 2.0.

> - `matching` - push all branches having the same name on both ends. This makes the repository you are pushing to remember the set of branches that will be pushed out (e.g. if you always push maint and master there and no other branches, the repository you push to will have these two branches, and your local maint and master will be pushed there). To use this mode effectively, you have to make sure all the branches you would push out are ready to be pushed out before running git push, as the whole point of this mode is to allow you to push all of the branches in one go. If you usually finish work on only one branch and push out the result, while other branches are unfinished, this mode is not for you. Also this mode is not suitable for pushing into a shared central repository, as other people may add new branches there, or update the tip of existing branches outside your control. This used to be the default, but not since Git 2.0 (simple is the new default).


## 设置上游分支
```shell
git push --set-upstream origin master
```
##
```shell
git push -u origin master
```

##
```shell
git push origin HEAD:<name-of-remote-branch>
```
