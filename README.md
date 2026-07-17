# Siva Pranesh — Web Developer Portfolio

A modern, highly visual, and interactive portfolio website showcasing my engineering skills, academic qualifications, professional journey, and featured projects. Built using responsive HTML5, modern Tailwind CSS variables, vanilla JavaScript, and customized Canvas animations.

## 🚀 Live Demo
You can view the live hosted version of this portfolio here:
- **Portfolio Website**: [Live Link / GitHub Pages Link]
- **Featured Project (ShopEase)**: [https://shopease-bice.vercel.app/](https://shopease-bice.vercel.app/)

---

## 🛠️ Tech Stack & Features
- **Frontend & Styling**: Semantic HTML5, Vanilla CSS, and Tailwind CSS.
- **Interactive Visualizations**: 
  - Dynamic canvas background particle engine reacting to cursor hover.
  - Interactive Project panels featuring toggling between **System Architecture Flow** maps and **Source Code Editors**.
  - Secure message transmission terminal logs console inside the Contact section.
- **Responsiveness**: Fully optimized and structured layout for mobile, tablet, and desktop viewports.
- **Theme Controls**: Light/Dark mode toggling with memory persistence.

---

## 📁 Repository Structure
```text
├── index.html          # Core structure, styling, sections, and logic
├── theme.js            # Light/Dark mode toggling and persistence logic
├── Pranesh.jpeg        # Portrait image asset
└── Siva_Pranesh_CV.pdf # Downloadable resume PDF
```

---

## 💻 Local Setup
To run this website locally on your machine:
1. Clone the repository:
   ```bash
   git clone https://github.com/Sivapranesh-23/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Open `index.html` in any web browser, or run a local server:
   ```bash
   npx serve .
   ```

---

## 📦 How to Upload to GitHub (Step-by-Step)

Follow these steps to upload your local code to your GitHub account:

### 1. Initialize Git and Stage Files
Open your terminal inside the project directory (`d:\Projects\port`) and run:
```bash
# Initialize git repository
git init

# Stage all files
git add .

# Create the initial commit
git commit -m "feat: initial commit of revamped full-stack developer portfolio"
```

### 2. Connect to GitHub Remote
1. Go to [GitHub](https://github.com/) and create a new repository named `portfolio` (keep it public, and **do not** check "Add a README.md", "Add .gitignore", or "Choose a license" since we already have local files).
2. Copy the remote URL.
3. Link your local project to GitHub and push your code:
```bash
# Rename the default branch to main
git branch -M main

# Add the remote repository URL (replace with your actual repository link)
git remote add origin https://github.com/Sivapranesh-23/portfolio.git

# Push files to the main branch
git push -u origin main
```

---

## 🌐 How to Host Live on GitHub Pages

You can host this portfolio live for free using GitHub Pages:
1. Go to your repository page on GitHub.
2. Click on **Settings** (top tab navigation).
3. Scroll down the left sidebar and click on **Pages**.
4. Under **Build and deployment** -> **Branch**, change the selection from `None` to `main`, keep the folder as `/ (root)`, and click **Save**.
5. Wait 1–2 minutes, then refresh the page. GitHub will display a message at the top of the settings page: *"Your site is live at `https://Sivapranesh-23.github.io/portfolio/`"*.
