rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:xujj277/moore-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://xujj277.github.io/moore-ui-website/index.html