#!/bin/bash

# 获取当前日期
TODAY=$(date +"%Y-%m-%d")

# 检查是否提供了标题
if [ $# -eq 0 ]; then
  echo "Usage: ./create-post.sh \"Your Post Title\""
  exit 1
fi

# 将标题转换为文件名友好的格式
TITLE="$1"
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# 创建文章文件
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

echo "Created new post: content/posts/${FILENAME}.md with today's date: ${TODAY}" 