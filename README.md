# guess-the-button-django-react

## Project Description 
1. In this app, the user has to prompt a number N (greater than 1) which represents the number of buttons that will be rendered.
2. After that, he has to choose which of the N buttons is the winning one.
3. The user has only one try.
4. Whenever he presses a button, he is informed whether he pressed the winning button or not and the winning button will change (possibly).
5. The user has the option to change the number of rendered buttons whenever he wants to.

## How to run the project
1. Clone the repository
2. Create an isotaled Python environment by running this command: ```virtualenv env```
3. Activate the virtual environment: ```. ./env/bin/activate``` for `MacOS/Linux` and ``` . .\env\scripts\activate``` for `Windows`
4. Make sure your node version is >= 12.0 by running ```node -v```, otherwise run the following command: ```nvm install node --reinstall-packages-from=node```
5. Run: ```python manage.py runserver```
6. Go to: [localhost](http://localhost:8000), if it does not work, then check which port your localhost uses!
7. You should now see the main page:
![image](https://www.linkpicture.com/q/main_page.png)
