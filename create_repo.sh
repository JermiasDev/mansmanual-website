#!/bin/bash

# Create repository using GitHub API
REPO_NAME="mansmanual-website"
DESCRIPTION="Man's Manual - Official website with waitlist for the faith, fitness, and focus app"

echo "To create the GitHub repository, please follow these steps:"
echo ""
echo "1. Go to: https://github.com/new"
echo "2. Repository name: $REPO_NAME"
echo "3. Description: $DESCRIPTION"
echo "4. Make it Public"
echo "5. Do NOT initialize with README (we already have one)"
echo "6. Click 'Create repository'"
echo ""
echo "Once created, GitHub will show you commands. Use these instead:"
echo ""
echo "git remote add origin https://github.com/YOUR_USERNAME/$REPO_NAME.git"
echo "git push -u origin main"
