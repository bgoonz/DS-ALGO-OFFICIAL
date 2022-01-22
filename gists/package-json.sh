#! /bin/bash

### USAGE
# example:
# package-json.sh version // current directory
# package-json.sh version /path/to/package/json

FIELD=$1
PACKAGE_PATH=${2-.}

CAT="cat $PACKAGE_PATH/package.json"

VALUE=$($CAT \
  | grep $FIELD \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo $VALUE