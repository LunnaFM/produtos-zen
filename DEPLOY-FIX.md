# 🔧 Fixing GitHub Pages Deployment

## The Problem
GitHub Actions couldn't find the `package-lock.json` file, which is required for consistent dependency installation.

## Solution Steps

### 1. Generate package-lock.json Locally
Run these commands in your project folder:

\`\`\`bash
# Delete any existing lock files
rm -f package-lock.json yarn.lock

# Install dependencies to generate package-lock.json
npm install

# Verify the file was created
ls -la package-lock.json
\`\`\`

### 2. Commit and Push the Lock File
\`\`\`bash
git add package-lock.json
git commit -m "Add package-lock.json for GitHub Actions"
git push origin main
\`\`\`

### 3. Enable GitHub Pages (if not done yet)
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 4. Alternative: Use yarn instead of npm
If you prefer yarn, update the workflow:

\`\`\`yml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'yarn'

- name: Install dependencies
  run: yarn install --frozen-lockfile
\`\`\`

## Quick Fix Commands

Run these in your terminal:

\`\`\`bash
# Navigate to your project
cd produtos-zen

# Clean install to generate lock file
rm -rf node_modules package-lock.json
npm install

# Add and commit
git add .
git commit -m "Fix: Add package-lock.json and update workflow"
git push origin main
\`\`\`

## Verify Deployment
1. Go to **Actions** tab in your GitHub repository
2. Watch the workflow run
3. Once complete, your site will be at: \`https://YOUR-USERNAME.github.io/produtos-zen/\`

---

✅ This should resolve the dependency lock file error!
\`\`\`
