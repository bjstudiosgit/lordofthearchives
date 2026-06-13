git checkout --orphan clean-main
git rm -rf .
echo # lordofthearchives> README.md
git add README.md
git commit -m "Reset repository"
git branch -M main
git push -f origin main