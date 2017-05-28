#!/bin/bash

DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M:%S)
FILE="src/_posts/$DATE-$1.markdown"

echo "Making a new post..."

if [ -e $FILE ]; then
  echo "$FILE already exists. Rename it and then re-run this script."
  exit
fi

echo "---
layout: post
title: TODO
date: $DATE $TIME
permalink: blog/$1
summary: TODO
---" > $FILE

echo "New post $FILE successfully created."
