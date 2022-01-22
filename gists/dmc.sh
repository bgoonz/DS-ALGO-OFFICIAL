#!/usr/bin/env bash

function createMachine() {
  name=$1
  memory=$2
  disk=$3

  echo Attempting to create docker-machine: $name with $memory MB of memory and $disk MB of disk

  docker-machine create --driver virtualbox \
    --engine-env HTTP_PROXY=$http_proxy \
    --engine-env HTTPS_PROXY=$http_proxy \
    --virtualbox-memory $memory \
    --virtualbox-disk-size $disk $name

  exit 0
}

function outputError() {
  echo
  echo "usage: ./dmc.sh <machine-name> <memory-mb> <disk-mb>"
  echo
  echo machine-name: name of docker-machine to create
  echo memory-mb: memory in megabytes
  echo disk-mb: disk size in megabytes
  echo
  echo "e.g. ./dmc.sh mr-tickle 1024 40000"
  exit 1
}

if [ $# == 3 ];
then
  createMachine $1 $2 $3
else
  outputError
fi
