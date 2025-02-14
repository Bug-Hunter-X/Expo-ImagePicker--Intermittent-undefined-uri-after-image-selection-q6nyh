# Expo ImagePicker: Intermittent undefined uri

This repository demonstrates a bug in Expo's ImagePicker library where the `uri` property of a selected image is sometimes undefined. The bug is intermittent and doesn't occur every time. 

## Bug Report

The `bug.js` file contains a minimal reproducible example.  The issue appears to be inconsistent; sometimes an image's `uri` is correctly populated, and other times it's `undefined`. This makes image processing unpredictable.  This problem has been encountered across various devices and image formats.

## Solution

The `bugSolution.js` file provides a potential workaround.  By adding a check for `uri` being `undefined`, we can handle cases where the value is missing gracefully. A `console.error` alerts the developer to the issue, and a fallback mechanism is provided.

This solution is a workaround rather than a fix for the root cause, which remains unknown. The ideal solution would require a fix within the Expo ImagePicker library.