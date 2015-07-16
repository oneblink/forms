# Forms: Release Process


## Forms Project

Follow directions from here:
https://github.com/blinkmobile/docs/wiki/Process:-JIRA-Versions-Releases

Update your local working copy when directed:

1. `git checkout develop && git pull`


Now we do our Git Flow process and our testing:

1. `git flow release start vx.x.x`

2. `npm install; npm update`

3. `npm test`, confirm everything passes

4. `npm outdated`, keep devDependencies up to date in package.json

5. `npm install; npm update` (if you changed package.json)

6. `npm test`, confirm everything passes (if you changed package.json)

7. JIRA: FORMS-153 -> Add to Test Cycle(s), for x.x.x (Ad hoc)

8. JIRA: FORMS-153, in Text Executions, click the E next to new Test Cycle

9. execute the Test Cycle, fix issues until everything PASSes

10. (from above JIRA guide) update CHANGELOG.md based on Issues Done (and commit)

11. bump version in package.json AND main.js (and commit)

12. `git flow release finish vx.x.x`, using "vx.x.x" as the tag's message

- resolve any merge issues

13. `git checkout develop && git pull && git push`

14. `git checkout master && git pull && git push && git push --tags`

15. `npm test`, just to trigger a fresh build

Now the Git project is up to date and everything.


## CDN-Platform-Assets Project

Follow directions from here:
https://github.com/blinkmobile/docs/wiki/Process:-Updating-CDN

The "desired additions" are:

1. `mkdir -p blink/forms/3/x.x.x`

2. `cp -v path/to/forms/build/forms3jqm.* blink/forms/3/x.x.x/`

- double-check that it follows similar patterns to previous releases

Complete the rest of the process as directed.

Within 15 minutes, the BMP services will have updated their local copies.
