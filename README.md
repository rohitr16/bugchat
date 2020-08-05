# Schmiede.ONE Bugchat challenge!

Welcome!

This challenge is about an app that replicates one of the most sophisticated debugging methods: [rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging).

The app is a chatbot which responds to your messages but lets just say that the bot's level of intelligence isn't really production ready. Your job is to make the bot smarter.

Here's a list of tasks (in no particular order) that you can accomplish to make it cooler:

1. Cleanup the code by moving the `dialogueEngine` to a dedicated file.
2. Try to make the `dialogueEngine` smarter.
3. Have a list of other rubber ducks in a sidebar and have their chat history. (imagine whatsapp web)

   ![whatsapp screenshot](https://www.chip.de/ii/1/0/9/3/1/0/6/4/6/web_whatsapp-1d0159a68e13bb79.jpg)

4. Write a REST API (using the technology of your choice) to serve answers.
5. Make the bot fetch the answers from the API.

---

**NOTE**

You might run into an issue if you have a Mac since Node version 10 is required to run this app and higher versions cannot build the dependencies listed in the package.json.
In case the app does not run on your version of node, you can [install nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
and add the node version to it.

---

### How to run

In the project directory, you can run:

#### `yarn start`

OR

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
