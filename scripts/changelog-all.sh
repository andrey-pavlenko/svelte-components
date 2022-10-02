#!/bin/bash

for CMP in $(find $(pwd)/components -maxdepth 1 -type d -not -path '*/\.*');
do
  cd $CMP
  if [[ -f "package.json" ]]; then
    pnpm run changelog
  fi
done