#!/bin/bash

for CMP in $(find $(pwd)/packages -maxdepth 1 -type d -not -path '*/\.*');
do
  cd $CMP
  if [[ -f "package.json" ]]; then
    npm run publish
  fi
done