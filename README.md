#THE FUTURE OF DECENTRALIZED CLOUD EDUCATION


#STEPS

##STEP 1: Launch & Access Your Server
-  Created a new AWS EC2 instance (Ubuntu 22.04 LTS)
-  Configured the Security Group to allow ports 22 (SSH), 80 (HTTP), and 443 (HTTPS)
-  SSH into my instance using my .pem key

##STEP 2: Install Core Software
-  Ran sudo apt update && sudo apt install nginx nodejs npm -y
-  Started and enabled Nginx
-  Confirmed Nginx is serving the default page (test in browser)

##STEP 3: Set Up Your Node.js Application
-  Created a directory (israel-project)
-  Initialized a Node.js project with npm init -y
-  Installed Express with npm install express
-  Added my app.js file to serve static files from the public folder

##STEP 4: Build Your Landing Page
-  Inside my project, I create a public/ folder
-  Added a index.html page that includes:- My name, project title, pitch and my professional bio
-  Applied Tailwind CSS for a dynamic look

##STEP 5: Set Up Nginx Reverse Proxy
-  Edited Nginx config to forward requests to Node.js (localhost:3000)
-  Reloaded Nginx and tested that proxying works correctly

##STEP 6: Secure with HTTPS
-  Installed Certbot with sudo apt install certbot python3-certbot-nginx -y
-  Ran sudo certbot --nginx and followed the prompts
-  Verified my site now loads over HTTPS

##STEP 7: Final Checks & Deployment Assets
-  Accessed my site via domain (https://bithub29.com.chickenkiller.com)
-  Took a screenshot of the live landing page ![landing-page](https://github.com/user-attachments/assets/f0311acd-7de2-4866-a936-99834bff0037)


-  Pushed my project to GitHub
-  Included a polished README.md detailing my steps
