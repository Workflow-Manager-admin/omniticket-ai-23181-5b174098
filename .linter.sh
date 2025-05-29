#!/bin/bash
cd /home/kavia/workspace/code-generation/omniticket-ai-23181-5b174098/omniticket_ai
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

