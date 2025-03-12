# Deploying to GitHub Pages

Follow these steps to deploy your Zypp Cart application to GitHub Pages:

## 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "zypp-cart")
4. Choose whether to make it public or private
5. Click "Create repository"

## 2. Initialize Git and Push Your Code

Run these commands in your project root directory:

```bash
# Initialize Git repository
git init

# Add all files to staging
git add .

# Commit your changes
git commit -m "Initial commit"

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/zypp-cart.git

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. For the source, select "gh-pages" branch
5. Click "Save"

## 4. Wait for Deployment

The GitHub Actions workflow will automatically build and deploy your site. You can check the progress in the "Actions" tab of your repository.

## 5. Access Your Deployed Site

Once deployed, your site will be available at:
`https://YOUR_USERNAME.github.io/zypp-cart/`

## Troubleshooting

- If your site doesn't appear, check the GitHub Actions logs for any errors
- Make sure the base path in vite.config.js matches your repository name
- Ensure all assets use relative paths 