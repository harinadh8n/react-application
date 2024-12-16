# react-application

create-react-app

it installs create-react-app globally in our environment 
Note: It is pre-installed in our environments

we can acheive this using below cmd

npm install -g create-react-app

npm uninstall -g create-react-app
npm cache clean --force


-g(globally) to apply for all project in newly adds


To create react app 
run this in cmd in terminal to create a React application

npx create-react-app {app name} --use-npm

Note: app name should be in lower letters

FOLDER STRUCTURE
--------------------------------------
public : 
  Where we will keep assets like images,icons,videos and etc.

src :
  Where we'll do the majority of our work. All of our React components will placed here.

npm start -> to run the application and dirctosry should be in the application

index.js is the starting poin of the application


npm start   ->


1. Install web-vitals Manually
Run the following command in your project directory to install the web-vitals package:

bash
Copy code
npm install web-vitals




Method A: Using npx (Recommended)
Open your terminal or command prompt.

Run the following command:
npx create-react-app my-react-app
Replace my-react-app with your desired project name (use only lowercase letters, numbers, or hyphens).

Navigate to the project folder:
cd my-react-app

Start the development server:
npm start
Your React app will open in your default browser at http://localhost:3000.


Method B: Using Global create-react-app
If you want to use create-react-app globally, install it first:
npm install -g create-react-app

Then create your app:
create-react-app my-react-app

Navigate to the project folder and start the development server:
cd my-react-app
npm start



my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock or package-lock.json

public/: Static assets.
src/: React components and application code.

Step 4: Customize Your App
Open the project in your code editor (e.g., VS Code).
Modify src/App.js to customize the UI.

Step 5: Install Additional Packages
You can install additional libraries as needed:

Example: Installing React Router:
npm install react-router-dom

Step 6: Build for Production
When you're ready to deploy your app, build it for production:
npm run build

Step 7: Cleanup
If you face issues with dependencies, you can delete node_modules and reinstall:
rm -rf node_modules package-lock.json
npm install




Step-by-Step Explanation to import the files in react js
../../../ navigates:

../ → Moves from src to react-app.
../ → Moves from react-app to nested-folder-level-3.
../ → Moves from nested-folder-level-3 to nested-folder-level-2.
After reaching the parent directory of back-folder, you append back-folder/myFile.