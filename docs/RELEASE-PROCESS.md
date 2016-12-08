# Forms: Release Process


## Forms Project

Follow directions from here:
https://github.com/blinkmobile/docs/wiki/Process:-JIRA-Versions-Releases

Update your local working copy when directed:

1.  `git checkout develop && git pull`


Now we do our Git Flow process and our testing:

1.  `git flow release start vx.x.x`

2.  `npm install; npm update`

3.  `npm test`, confirm everything passes

4.  `npm outdated`, keep devDependencies up to date in package.json

5.  `npm install; npm update` (if you changed package.json)

6.  `npm test`, confirm everything passes (if you changed package.json)

7.  execute [MANUAL-TESTS.md](MANUAL-TESTS.md), fix issues until everything PASSes

8.  execute the Test Cycle, fix issues until everything PASSes

9.  (from above JIRA guide) update CHANGELOG.md based on Issues Done (and commit)

10. bump version in package.json AND main.js (and commit)

11. `git flow release finish vx.x.x`, using "vx.x.x" as the tag's message

-   resolve any merge issues

12. `git checkout develop && git pull && git push`

13. `git checkout master && git pull && git push && git push --tags`

14. `npm test`, to trigger a fresh build

Now the Git project is up to date and everything.


## CDN-Platform-Assets Project

Follow directions from here:
https://github.com/blinkmobile/docs/wiki/Process:-Updating-CDN

The "desired additions" are:

1.  `mkdir -p blink/forms/3/x.x.x`

2.  `cp -v path/to/forms/build/forms3jqm.* blink/forms/3/x.x.x/`

-   double-check that it follows similar patterns to previous releases

Complete the rest of the process as directed.

Within 15 minutes, the BMP services will have updated their local copies.
