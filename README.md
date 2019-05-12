# Justice
Mobile App that aims to reduce crime reporting time and keep users up to date with what is going on in their neighborhood 

# Installing and using Expo
1. Follow this installation guide: https://docs.expo.io/versions/latest/introduction/installation/
2. Go through this guide to help you get started: https://expo.io/learn

# Running the application
1. Replace the files in your project folder with the ones here. 
2. Create a FourSquare account to get an API client ID and secret and add those in the HomeScreen file in the screens folder in the url variable in the 'getCrimeLocation' method.
3. Create a News-Api account to get an API key and add it to the LinksScreen file in thee screens folder in the fetch method within the 'componenetDidMount' method
4. Run the App !
------------------------------------------
Alternative:
1. Head to Snack.expo.io
2. Copy the following to it:
  - App.js file
  - screens folder
  - navigation folder
  - constants folder
  - components folder
3. Snack will prompt you to install required modules, click install
4. Run the App !
  


# TroubleShooting
- Modules Missing:
  - The full mmodule list is too large to be posted here but the some critical modules include: 
  ![Capture](https://user-images.githubusercontent.com/42480955/57581969-12af0880-7474-11e9-9c12-7695b8a7f503.PNG)

- Emulators on Snack are not running application properly
  - Try running the application on your phone. I noticed that sometimes emulators lag, or require more time to load than if you run it on your phone.

  

