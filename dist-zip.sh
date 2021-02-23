#!/bin/sh

echo "Zipping dist into dist/index.zip"

cd dist/
# Zip everything, even the hidden files
zip index.zip `find . -type f`
