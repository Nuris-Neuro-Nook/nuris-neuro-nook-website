# Science Hub - Your Biology & Neuroscience Education Website

Welcome! This is your complete website. Follow the steps below to get it live on the internet (for free).

---

## STEP 1: Create a GitHub Account (2 minutes)

GitHub is where your code lives—think of it like Google Drive for programmers.

1. Go to **github.com**
2. Click "Sign up" (top right)
3. Enter your email
4. Create a password
5. Choose a username
6. Click through the confirmation steps
7. Done! You now have a GitHub account

---

## STEP 2: Create a New Repository on GitHub (2 minutes)

A "repository" is just a folder for your project.

1. Go to **github.com** and log in
2. Click the **"+"** icon in the top right corner
3. Click **"New repository"**
4. Name it: `science-hub` (or whatever you like)
5. Leave everything else as default
6. Click **"Create repository"** (green button)
7. You'll see a page with some code. **COPY THE COMMANDS** that look like this:

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

---

## STEP 3: Download & Upload Your Code (5 minutes)

Now you're uploading the files I created.

### On Your Computer:

1. Create a folder called `science-hub` on your desktop
2. **Download all the files I'm giving you** and put them in that folder
3. You should have:
   - `pages/` (folder)
   - `styles/` (folder)
   - `package.json` (file)
   - `next.config.js` (file)
   - `tailwind.config.js` (file)
   - `postcss.config.js` (file)
   - `.gitignore` (file)

### Upload to GitHub:

1. **Open Terminal/Command Prompt**
   - **Mac:** Press `Cmd + Space`, type "Terminal", press Enter
   - **Windows:** Press `Windows Key`, type "Command Prompt", press Enter

2. Copy and paste these commands ONE AT A TIME (press Enter after each):

```
cd Desktop/science-hub
```

Then copy this command from your GitHub page (it will have YOUR username):
```
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/science-hub.git
git push -u origin main
```

3. You'll be asked for your GitHub username and password. Paste them in. *(Don't worry if you don't see the password—it's normal)*

4. Done! Go back to GitHub and refresh the page. You should see all your files there.

---

## STEP 4: Deploy to Vercel (2 minutes)

Vercel is the platform that makes your site live and free.

1. Go to **vercel.com**
2. Click **"Sign up"** (top right)
3. Click **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub
5. Click **"Import Project"**
6. Select the `science-hub` repository
7. Click **"Import"**
8. Click **"Deploy"** (it will automatically find the right settings)
9. Wait 1-2 minutes...
10. **You'll see a ✓ and a link to your live website!**

That's it. Your site is now live on the internet.

---

## STEP 5: Update Every Week (5 minutes)

When you make a new video, you need to add it to the list. Here's how:

### Find the File to Edit:
1. Go to your GitHub repository
2. Click on the `pages` folder
3. Click on `index.js`
4. Click the **pencil icon** (top right) to edit

### Add Your New Video:
Find this section:

```javascript
const resources = [
  {
    id: 1,
    title: "Does caffeine actually boost memory?",
    category: "myth-bust",
    type: "video",
    color: "orange",
    link: "#"
  },
  // ← ADD YOUR NEW VIDEO BELOW HERE
]
```

Copy one of the existing videos and change it. For example:

```javascript
{
  id: 5,
  title: "Your New Video Title Here",
  category: "myth-bust",    // or "concept"
  type: "video",
  color: "green",           // orange, pink, or green
  link: "https://youtube.com/watch?v=YOUR-VIDEO-ID"
}
```

### Save & Publish:
1. Scroll down and click **"Commit changes"**
2. Add a message like "Add new video: Sleep and Memory"
3. Click **"Commit changes"** again
4. Wait 1 minute
5. Your live website automatically updates!

---

## Understanding What You're Editing

**Important: The `resources` list**

Each video needs:
- **id:** A number (just keep going up: 1, 2, 3, 4, 5...)
- **title:** Your video title (in quotes)
- **category:** Either `"myth-bust"` or `"concept"`
- **type:** Usually `"video"` (you can also use `"explainer"`)
- **color:** `"orange"`, `"pink"`, or `"green"`
- **link:** Your YouTube URL (like `"https://youtube.com/watch?v=abc123"`)

Example with a real YouTube link:
```javascript
{
  id: 5,
  title: "Why We Sleep: The Science Explained",
  category: "concept",
  type: "video",
  color: "pink",
  link: "https://youtube.com/watch?v=dQw4w9WgXcQ"
}
```

---

## Troubleshooting

**"I can't find Terminal/Command Prompt"**
- Mac: Press Cmd + Space, search for "Terminal"
- Windows: Press Windows key, search for "Command Prompt" or "PowerShell"

**"Git is not recognized"**
- You need to install Git first: go to **git-scm.com** and download the installer
- Run it, follow the steps, then restart your Terminal/Command Prompt

**"My site didn't update"**
- Wait 2-3 minutes after committing
- Refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

**"I can't find my live website URL"**
- Go to vercel.com
- Click on your `science-hub` project
- The URL is at the top of the page

---

## Next Steps (Optional)

Want to add more features? Let me know:
- A "Resources" page with downloadable PDFs
- A blog section for longer explainers
- A newsletter signup that actually works
- Social media links that work
- A contact form

---

## Questions?

Ask me anything! This is a learning opportunity, and I'm here to help you understand each step.

Good luck! 🚀
