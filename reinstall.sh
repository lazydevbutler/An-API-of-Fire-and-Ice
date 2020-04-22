#!/bin/bash 

rm -rf /Users/raphaelchua/Library/Developer/Xcode/DerivedData/*
rm -rf ./node_modules && \
yarn install && \
rm -rf ./ios ./android && \
yarn eject && \
cd ./ios && pod install && cd ../