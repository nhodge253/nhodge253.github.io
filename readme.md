Remember that when pushing changes to the portfolio, never push to origin master.
Instead, always push in the develop branch.
So, when ready to push, git checkout develop
git add .
git commit
git push origin
grunt build
grunt buildcontrol
ouila
never push origin master or in the master branch!!!

here is Shawn's version
Dude! Remember: When you are using `grunt buildcontrol` that takes care of your deployment. You start out perfect here: In your `develop` branch (`git checkout develop`) you should commit your changes, push to origin, then run `grunt build` and `grunt buildcontrol`.


[7:29]
Yes, it will complain because you manually updated your master branch, so you may need to run `grunt buildcontrol --force`


[7:29]
if that doesn’t work, then you may need to delete the `dist/` directory and run `grunt build` a second time.


[7:29]
then `grunt buildcontrol` after that


[7:29]
but it should give you a message about that…


[7:31]
So, when you get back to this, follow these steps:


[7:31]
1. check out the develop branch `git checkout develop`


[7:32]
2. build your code `grunt build`


[7:32]
3. deploy your code `grunt buildcontrol --force`


[7:32]
that should get your site back up and running. to make any additional changes, be sure you are in the `develop` branch when making your edits, and then follow this sequence:


[7:32]
1. make code changes


[7:32]
2. commit code changes


[7:33]
3. push code changes to origin (`git push origin`) — and make sure you’re in the `develop` branch when you do that


[7:33]
4. run `grunt build`


[7:33]
5. run `grunt buildcontrol`
