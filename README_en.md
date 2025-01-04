# B-Log: Content Management System Frontend for Buduan Classmate
🌍 **Language** : [中文](/README.md) | EN

💻 The project is currently under development, and we welcome you with ideas to join us in creating it! (Email me: [buduan461@gmail.com](mailto:buduan461@gmail.com))  
📃 The frontend of Buduan Classmate's content management system  

## 📁 Directory Structure
- src VUE application
    - assets Static resources
    - components Components
        - contextBlock Content components
        - postCards List components
    - router Routing
    - views Pages
        - Article Article-related pages
    - stores Pinia
    - App.vue Main application
    - main.js
- index.html Website main entry

## ✈️ Current Development Status and Future Plans
Currently, some pages are hardcoded and do not have placeholders for backend modifications. We will gradually update the backend to support dynamic modifications in the future.  
The initial purpose of this project was to update my personal website and create a simple blog system for publishing articles and design works. My **frontend skills are limited**, so there may be some messy code and bugs. I appreciate your understanding. This project was basically developed while learning.  
If any experts are willing to join me in completing this project, I would be extremely grateful 🙏🏻.

## 📥 Deployment
⚠️ This program is not yet complete, and deployment is not recommended. If you need to deploy it, you will need to modify the code yourself.  
### Step 1: Fork the Repository
**Fork** this repository to your own GitHub account.  

### Step 2: Modify Site Information in main.js
Update the site title, API domain, and other information in the `siteInfo` object in `main.js`.  
Note that you need to configure CORS on the backend to avoid browser cross-origin issues.  

### Step 3: Use GitHub Workflow for Automatic Packaging
This repository is already configured with a Workflow that automatically packages the project and adds it to a release when a tag is created or updated.

### Step 4: Upload the Packaged Program to a Server
Prepare a web server with Nginx, Apache, or similar software. Upload and extract the packaged files, configure the site settings, and then it will be accessible.

## Content (Posts) Hierarchy
- Tab
    - Catalogue
    - Tag
        - Keyword

#### Tab
Physically separates different content hierarchies, such as blog posts, design works, etc.  
Content from different hierarchies will not appear together under catalogue or tag searches, nor will they be recommended as related content, meaning different hierarchies do not interfere with each other.

#### Catalogue and Tag
Elements used to categorize content within each hierarchy.  
**Catalogue**: Classifies content, with each piece of content corresponding to one category.  
**Tag**: Labels content, with each piece of content able to correspond to multiple tags, matched based on tags.  

#### Keyword
Typically consists of 1-5 Chinese characters or 1-3 words. Each article (1000 words) will generate dozens of keywords, which can be AI-generated. It is not recommended to display these to front-end users, but they can be used for related content matching or optimizing article searches.
 return;
## 😎 Developers
- Project Initiator: [Buduan](https://github.com/buduan) (Baicen, @buduan)

## 🔗 Related Links
Server and Admin Backend Repository: (Not yet open-sourced)  
Documentation: (In progress)  
API Debugging Tool: https://apifox.com/apidoc/shared-0d240d07-2dd6-4733-8d18-214464809bfe (BY Apifox)
