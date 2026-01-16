#!/bin/bash

# GitHub repository creation using authenticated API
# Note: This requires a personal access token

echo "Creating GitHub repository: mansmanual-website"
echo ""

# Try to use git credential helper to get token
# If user has GitHub CLI or stored credentials, this might work
TOKEN=$(git config --global github.token 2>/dev/null)

if [ -z "$TOKEN" ]; then
  echo "We need a GitHub Personal Access Token to create the repository."
  echo ""
  echo "Please create one at: https://github.com/settings/tokens/new"
  echo "Required scopes: 'repo' (Full control of private repositories)"
  echo ""
  echo "Once you have the token, run:"
  echo ""
  echo "  TOKEN='your_token_here'"
  echo "  curl -X POST https://api.github.com/user/repos \\"
  echo "    -H 'Authorization: token \$TOKEN' \\"
  echo "    -H 'Accept: application/vnd.github+json' \\"
  echo "    -d '{\"name\":\"mansmanual-website\",\"description\":\"Man'\''s Manual - Official website with waitlist\",\"private\":false}'"
  echo ""
  echo "Then push with:"
  echo "  git push -u origin main"
  exit 1
fi

# Create the repository
curl -X POST https://api.github.com/user/repos \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -d '{"name":"mansmanual-website","description":"Mans Manual - Official website with waitlist for the faith, fitness, and focus app","private":false}'

