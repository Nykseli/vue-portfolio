#!/bin/bash

###
# Script for copying files to the target server with rsync
##

###
# Build and deploy the website.
# This assumes that node_modules are installed
##

###
# Env variables
##
TARGET_USER=$WDEPLOY_USER
TARGET_PASS=$WDEPLOY_PASS
TARGET_URL=$WDEPLOY_URL
TARGET_PATH=$WDEPLOY_PATH
TEXT_TARGET_PATH=$WTEXT_DEPLOY_PATH

set -e

function usage {
    echo "Usage bash deploy.sh normal|nobuild"
    echo "normal:"
    echo "      build and deploy"
    echo "nobuild:"
    echo "      no build. only deploy"
    exit
}

# if no argument
if [[ $# -eq 0 ]]
then
    usage
fi


function transfer_files {
    TARGET_RSYNC="scp -r dist/. $TARGET_USER@$TARGET_URL:$TARGET_PATH"
    TARGET_TEXT="scp -r txt/. $TARGET_USER@$TARGET_URL:$TEXT_TARGET_PATH"

    echo "Transfering files."
    $TARGET_RSYNC
    echo "Transfer done."
}

function normal_transfer {
    npm run build
    npx tsc scripts/gen-text-site.ts && node scripts/gen-text-site.js
    cd txt
    ln -s en.html index.html
    cd ..
    transfer_files
}

function nobuild_transfer {
    transfer_files
}

if [ -z "$TARGET_USER" ]; then
    echo "Couldn't find the WDEPLOY_USER env variable"
    exit 1
fi

if [ -z "$TARGET_PASS" ]; then
    echo "Couldn't find the WDEPLOY_PASS env variable"
    exit 1
fi

if [ -z "$TARGET_URL" ]; then
    echo "Couldn't find the WDEPLOYT_URL env variable"
    exit 1
fi

if [ -z "$TARGET_PATH" ]; then
    echo "Couldn't find the WDEPLOY_PATH env variable"
    exit 1
fi

if [ -z "$TARGET_PATH" ]; then
    echo "Couldn't find the WTEXT_DEPLOY_PATH env variable"
    exit 1
fi

UPDATE_TARGET=$1

# Set the UPDATE_FILES based on the argument
case "$UPDATE_TARGET"
in
    "normal")
        normal_transfer
        ;;
    "nobuild")
        nobuild_transfer
        ;;
    *)
        usage
        ;;
esac
