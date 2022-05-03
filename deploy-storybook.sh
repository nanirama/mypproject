#!/bin/bash
npm run build:storybook
aws s3 cp storybook s3://swapcard-showcase-storybook --recursive --include '*'