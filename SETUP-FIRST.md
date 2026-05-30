# SETUP GUIDE - Do This First (Before GitHub)

Follow these steps EXACTLY. This will take 10 minutes.

---

## PART 1: Organize Your Files on Your Computer

### Step 1: Create a folder on your Desktop
1. Right-click on your Desktop
2. Click "New Folder" (or "New" → "Folder")
3. Name it: `science-hub`
4. Double-click to open it

**You should now be INSIDE an empty `science-hub` folder on your Desktop.**

### Step 2: Download all files from this project
1. Go to where you saved the project files I gave you
2. Download ALL of these files into your `science-hub` folder:

**Files you need:**
- `README.md`
- `package.json`
- `next.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `.gitignore` (starts with a dot - this is normal)

**Folders you need:**
- `pages/` folder (with `index.js` and `_app.js` inside)
- `styles/` folder (with `globals.css` inside)

### Step 3: Check your folder structure

Your Desktop should look like this:

```
Desktop/
└── science-hub/
    ├── README.md
    ├── package.json
    ├── next.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── .gitignore
    ├── pages/
    │   ├── index.js
    │   └── _app.js
    └── styles/
        └── globals.css
```

**If you're missing any files, download them again.**

---

## PART 2: Upload to GitHub

### Step 1: Open Terminal/Command Prompt

**On Mac:**
1. Press `Cmd + Space`
2. Type: `terminal`
3. Press Enter
4. A black window opens

**On Windows:**
1. Press `Windows Key`
2. Type: `powershell` or `command prompt`
3. Press Enter
4. A black window opens

### Step 2: Type this command (IMPORTANT: Copy it EXACTLY)

```
cd Desktop/science-hub
```

Then press Enter.

**What this means:** "Go to the science-hub folder on my Desktop"

You should now see something like: `username@computer science-hub %` (Mac) or `C:\Users\username\Desktop\science-hub>` (Windows)

### Step 3: Initialize Git

Copy and paste this ONE command at a time:

```
git init
```

Press Enter. You might not see anything—that's normal.

### Step 4: Add all your files

```
git add .
```

Press Enter.

### Step 5: Make your first commit

```
git commit -m "First commit"
```

Press Enter.

### Step 6: Rename your branch

```
git branch -M main
```

Press Enter.

### Step 7: Connect to GitHub

Go to your GitHub repository page (the one you created). 

**Copy the commands that look like this:**
```
git remote add origin https://github.com/YOUR-USERNAME/science-hub.git
git push -u origin main
```

Paste them into Terminal/Command Prompt and press Enter.

**You'll be asked for your GitHub username and password.**

---

## PART 3: Verify Everything Uploaded

1. Go back to your GitHub repository page
2. Refresh the page
3. You should see all your files listed there

If you don't see them, let me know and we'll troubleshoot!

---

## Troubleshooting

**"command not found: git"**
- You need to install Git: go to git-scm.com, download, and install it
- Restart Terminal/Command Prompt
- Try again

**"fatal: not a git repository"**
- Make sure you typed `cd Desktop/science-hub` correctly
- Check that you're in the right folder (you should see files when you type `ls` or `dir`)

**"Authentication failed"**
- Make sure you're using your correct GitHub username
- If you don't remember your password, reset it on github.com

---

## Next: Deploy to Vercel

Once everything is on GitHub, come back and I'll walk you through Vercel (the final step to make your site live).

Questions? Ask me!
