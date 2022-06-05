#!/bin/bash

if [[ -z $1 ]]; then
  echo "Empty param"
  echo "Use $0 <newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git"
  exit 1
fi

for CMP in $(find $(pwd)/components -maxdepth 1 -type d -not -path '*/\.*');
do
  cd $CMP
  if [[ -f "package.json" ]]; then
    pnpm version $1
  fi
done