Git commands :

A. how to commit and push existing code to new repo on GitHub :
1. git init
2. git remote add origin “link”
3. git add .
4. git commit -m “first commit”
*4. git commit -am "message" (combines both step 3 and 4)
5. git push -u origin main


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
B. how to change branch and commit changes :

# for commit message 
Fix : bugs
Feature : new 
Chore : wrong stuff but not interfering with production 

# for branch naming
Git branch fix/heading-font
Git branch feat/new-feature
Git branch chore/xyz-abc 

# for setup
	⁃	git clone <PROJECT_URL>
	⁃	setup steps from README.md
	⁃	git(main) -> own branch [guide above mentioned]
	⁃	git branch <NEW_BRANCH>
	⁃	git checkout <NEW_BRANCH>
	⁃	changes in branch 
	⁃	git add .
	⁃	git commit -m “….” [guide mentioned above]
	⁃	git push origin <BRANCH_NAME>

# for upstream 
	⁃	Copy project URL 
	⁃	git remote -v 
	⁃	git remote add upstream <PROJECT_URL>
	⁃	git remote -v 
	⁃	git fetch upstream 
	⁃	To pull changes -> VCS -> three dot -> Pull, Push -> Pull From -> Upstream URL -> upstream/main
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
C. how to clone repo from GitHub :
    1. cd into the folder 
    2. git clone “clone link”
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
D. how to push updated code to repo that has already been linked to and pushed to 
1. git add .
2. git status(optional)(to see if changes are staged or not)
3. git commit -m ”files changes”
4. git push origin main 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
E. Process of making a Pull Request on a public Repository
1. fork the repo 
2. clone the forked repo 
3. setting up the project 
4. making changes 
5. build the project 
6. git branch new-branch-name
7. git checkout new-branch-name
8. git add . 
9. git commit -m “”
10. git push origin new-branch-name
11. compare and pull request on fork repo GitHub site 
12. make pr with images and lists 
13. submit pr 





