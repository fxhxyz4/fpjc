#!/bin/sh

npm run prettier
npm run lint

npm run test
npm run build

# npm run babel
npm run uglify
chmod +x ./release.sh
