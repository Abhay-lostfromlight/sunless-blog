#!/bin/bash

# Get the current date in YYYY-MM-DD format
TODAY=$(date +"%Y-%m-%d")

# Check if a title was provided as an argument
if [ $# -eq 0 ]; then
  echo "Usage: ./create-post.sh \"Your Post Title\""
  exit 1
fi

# Convert the title to a filename-friendly format (lowercase, spaces to hyphens)
TITLE="$1"
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# Create the new post file with front matter
cat > "content/posts/${FILENAME}.md" << EOF
---
title: "${TITLE}"
date: ${TODAY}
draft: false
tags: []
categories: []
---

Your content here...
EOF

# Output the result
echo "Created new post: content/posts/${FILENAME}.md with today's date: ${TODAY}" 