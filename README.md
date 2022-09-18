
# MyHome API


![myhome](https://user-images.githubusercontent.com/47572512/190903948-8245fb7b-33f4-4a24-b6f8-f54863d818ad.png)



![1_MQ-Lf8tmtfa-pumN2Sh0cw](https://user-images.githubusercontent.com/47572512/190904216-730aef8f-b3a8-43a1-aaa6-97edbc71f7fd.png)


A deployed API can be found [Here](https://ci-myhome.herokuapp.com/).

# Table of contents

- [MyHome](#myhome)
- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
    - [What is MyHome?](#what-is-myhome)
    - [What is the idea behind this project?](#what-is-the-idea-behind-this-project)
- [Technologies](#technologies)
    - [Frontend](#frontend-technologies)
    - [Backend](#backend-technologies)
- [User Stories](#user-stories)
- [Testing](#testing)
    - [Testing User Stories](#testing-user-stories)
    - [Bugs and solutions](#bugs-and-solutions)
    - [Performance](#api-performance)
- [Deployment](#deployment)
- [Forking the Repository](#forking-the-repository)
- [Creating a Clone](#creating-a-clone)
- [Credits](#credits)
    - [Links](#links)
    - [Acknowledgements](#acknowledgements)
    - [Disclaimer](#disclaimer)
    


# Introduction

### What is MyHome?

MyHome is a real estate portal for seller and buyers, sellers can list their properties easly and quickly and buyes have full screen listing page whit all the listings on left side and map on right side so thay can easly select property but look or short desctipn of property or by location where they want to buy or rent houses,apartmants or offices.

### What is the idea behind this project?
The idea behidn MyHome was to create a simple,user-intuitive real esteted app that is not overwhelmed for users or sellers, thats works fast and is secure with simple registration and login forms and with quickes way to add new listins that buyrs or tenents can select by scroling on left side where they can see pcituers and short description of propery or on right by selecting propery on the map.

[Back to top](#table-of-contents)

# Technologies 

### This aplication is seperated in two parts. BackEnd and FrontEnd. Both apications are depolyed speretly and both use difrent technologies. You can find more informatiot about them here


### FrontEnd Technologies

- HTML (build up layout and content of the application.)
- CSS (custom styling and override Bootstrap stylings to fit with the theme of the app.)
- ReactJS (interactive functionalities of the app.)
- React-Bootstrap (the responsive front-end framework to build the layout and style the app.)

### BackEnd Technologies

- Python (backend functionalities handling data, database interaction, and CRUD functionalities.)
- Django (the core framework used to build backend for MyHome.)


### Backend Requirements

- Asgiref
- Cloudinary
- Gunicorn
- Psycopg
- Coreapi
- Django
- Django Cors Headers
- Django Jazzmin
- Django Rest Framework
- Pillow
- Djoser
- Whitenoise

[Back to top](#table-of-contents)



### User Stories
- As a site user, I want to create an account.
- As a Site User, I login in to my account quickly
- As a Site User, I can visit website from any device
- As a Site User, I don't have to wait to long for website to load
- As a Site User, I want to be able to edit my profile information
- As a site admin, I want to be able to see my registered users and their profiles
- As a site admin, I want to be able to edit listings
- As a site admin, I can delete listings
- As a site admin, I can delete users

### Seller Stories
- As a seller, I can add a new listing to webiste
- As a seller, I can create, read, update and delete my listings
- As a seller, I can upload pictures for my listings
- As a seller, I can display my or my compnay contant information
- As a seller, I can display my other lisintgs on my profile

### Buyer/Tenent Stories
- As a buyer, I can view a listings
- As a buyer, I can see pictures of property
- As a buyer, I can see seller contact infromation
- As a buyer, I can all listings by seller i'm interest in
- As a buyer, I can view map and property location
- As a buyer, I can view listing details

[Back to top](#table-of-contents)

# Testing

### Testing User Stories 

1. As a site User, I was able to create my account. 
    - by clicking on registration I was prompted to fill out a username, e-mail and password fields after I fill out the required information my account was created.    
2. As a Site User, I was able to access my listigns.
    - While on website i can access listings and listings details where i can see listing details.
3. As a Seller, I was able to add a new listings to website.
    - While logged in i was able to add new listing.
4. As a Seller, I was able create, read, update and delete my listings.
    - While logged in i was able to create my listings, updated my listings and delete my listings.
5. As a Seller, I was able to add infromation about my agency.
    - While logged in i was able to edit my agency inforamtion and display information i wanted to.
6. As a Buyer, I was able to see listings and listings details.
    - - I was able to see all the listings on website
7. As a Buyer, I was able to see seller information.
- - I was able to see who listed properties i was interested in
8. As a Buyer, I was able to see map.
- - I was able to map and location where this listings is
9. As a site Admin, I can see list of registered users.
    - While logged in on admin panel i can see list of my users and i can manage them.
8. As a site Admin, i can manage listings on website
    - While logged in on admin panel i can see list of listings who is owner and i can manage them.


### Bugs and solutions

1. I had problem CORS between my frontend and backend.
    - The solution was to install djnago-cors-headers and set CORS_ALLOW_ALL_ORIGINS: to True.
2. I had problem with collectstatic function.
    - With help of Jonh from Code Institue Tutor Assistance we ware able to collect all the statics files when we change cloudnery position in installed apps. 
3. I wanted to deploy this project as one app but in the end i had to sepered them.
    - Idea was to deploy frontend and backend as one project but even with help of Gemma from Code Institue Tutor Assistance we ware not able to get django to load React app so we decide to deploy it as 2 sepered projects
4. There was a problem with heroku and github.
    - The solution was to redeploy my app and create new postgres database.




### API Performance

![MdPsFXc](https://user-images.githubusercontent.com/47572512/190911774-891571a4-1054-4776-ba65-594f01eeee55.png)

Test with [web.dev](https://web.dev/). gave me those results 


![M14i3No](https://user-images.githubusercontent.com/47572512/190911892-520ae900-8740-43e2-8996-ce91cee5bbfc.png)


Test with [GTMetrix](https://gtmetrix.com/). gave me those results 




[Back to top](#table-of-contents)

# Deployment

To deploy this page to Heroku from its GitHub repository, the following steps were taken:

1. Create the Heroku App:

2. Select "Create new app" in Heroku.
3. Choose a name for your app and select the location.
4. Attach the Postgres database

5. In the Resources tab, under add-ons, type in Postgres and select the Heroku Postgres option.
6. Prepare the environment and settings.py

7. In the Settings tab, click on Reveal Config Vars and copy the url next to DATABASE_URL.
8. In your GitPod workspace, create an env.py file in the main directory.
    - Add the DATABASE_URL value and your chosen SECRET_KEY value to the env.py file.
    - Add the SECRET_KEY value to the Config Vars in Heroku.
    - Update the settings.py file to import the env file and add the SECRETKEY and DATABASE_URL file paths.
    - Update the Config Vars with the Cloudinary url, adding into the settings.py file also.
    - In settings.py add the following sections
    - Cloudinary to the INSTALLED_APPS list
    - STATICFILE_STORAGE
    - STATICFILES_DIRS
    - STATIC_ROOT
    - MEDIA_URL
    - DEFAULT_FILE_STORAGE
    - TEMPLATES_DIR
    - Update DIRS in TEMPLATES with TEMPLATES_DIR
    - Update ALLOWED_HOSTS with ['app_name.heroku.com', 'localhost']
    - Store Static and Media files in Cloudinary and Deploy to Heroku:

9. Create three directories in the main directory
    - media 
    - storage
    - templates
10. Create a file named "Procfile" in the main directory and add the following:
    - web: gunicorn project-name.wsgi
11. Go to the Deploy tab on Heroku and connect to GitHub, then to the required repository. Click on Deploy Branch and wait for the build to load. When the build is complete, the app can be opened through Heroku and automatic deployments can be enabled.

[Back to top](#table-of-contents)

# Forking the Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log into GitHub or create an account.
2. Locate the GitHub Repository.
3. At the top of the repository, on the right side of the page, select "Fork"
4. You should now have a copy of the original repository in your GitHub account.

[Back to top](#table-of-contents)

# Creating a Clone

ow to run this project locally:

1. Install the GitPod Browser [extension.](https://www.gitpod.io/docs/browser-extension/)
2. After installation, restart the browser.
3. Log into GitHub or create an account.
4. Locate the GitHub Repository.
5. Click the green "GitPod" button in the top right corner of the repository. This will trigger a new gitPod workspace to be created from the code in github where you can work locally.
How to run this project within a local IDE, such as VSCode:

6. Log into [GitHub](https://github.com/).
7. Locate the [GitHub Repository.](https://github.com/TonnyG95/task-mate).
8. Under the repository name, click "Clone or download".
9. In the Clone with HTTPs section, copy the clone URL for the repository.
10. In your local IDE open the terminal.
11. Change the current working directory to the location where you want the cloned directory to be made.
12. Type 'git clone', and then paste the URL you copied in Step 3.
13. git clone https://github.com/USERNAME/REPOSITORY
14. Press Enter. Your local clone will be created.
15. Further reading and troubleshooting on cloning a repository from GitHub here

[Back to top](#table-of-contents)

# Credits

### Links
- [Whitenoise](http://whitenoise.evans.io/en/stable/index.html) Radically simplified static file serving for Python web apps
- [Sqlparse](https://github.com/andialbrecht/sqlparse) sqlparse is a non-validating SQL parser for Python
- [Pytz](https://pythonhosted.org/pytz/) World Timezone Definitions for Python
- [Psycopg](https://www.psycopg.org/) Psycopg is the most popular PostgreSQL adapter for the Python
- [Gunicorn](https://docs.gunicorn.org/en/latest/index.html) Gunicorn ('Green Unicorn') is a pure-Python WSGI server for UNIX
- [Cloudinary](https://cloudinary.com/) Used for hosting static files
- [Asgiref](https://asgi.readthedocs.io/en/latest/) ASGI is a spiritual successor to WSGI
- [Django](https://www.djangoproject.com/) High-level Python web framework that encourages rapid development
- [web.dev](https://web.dev/) Used to test pages in a lab environment powered by PageSpeed Insights.
- [GTMetrix](https://gtmetrix.com/) Used to test how my page performs
- [Django Cors Headers](https://pypi.org/project/django-cors-headers/) A Django App that adds Cross-Origin Resource Sharing (CORS) headers to responses. 
- [Django Rest Framework](https://www.django-rest-framework.org/) Django REST framework is a powerful and flexible toolkit for building Web APIs. 
- [Django Jazzmin](https://django-jazzmin.readthedocs.io/) Intended as a drop-in app to jazz up django admin site.
- [Pillow](https://pypi.org/project/Pillow/) This library provides extensive file format support, an efficient internal representation, and fairly powerful image processing capabilities.
- [Djoser](https://djoser.readthedocs.io/en/latest/index.html) Djoser library provides a set of Django Rest Framework views to handle basic actions such as registration, login, logout, password reset and account activation.


### Acknowledgements

During this project, I got a new mentor Rohit Sharma. I want to thank him for all tips and tricks that helped me improve this project and I want to thank him for all time he spent answering my questions. And big thanks to Code Institute Tutors Jonh and Gemma for helping me with this project. 

### Disclaimer
This project was create for educational purposes only, and credits for all pictures/icons and listings used in this project go to their respective owners.

[Back to top](#table-of-contents)
