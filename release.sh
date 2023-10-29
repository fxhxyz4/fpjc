#!/bin/sh

./build.sh
step="patch"

npm version "${step}"
npm publish
