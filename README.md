## Hello!

To use the project, open a terminal window and start by cloning the repo on your local computer. Then `cd` into both the `frontend/my-app/` and `backend/` folders and run `npm install`. After doing so, run `node index.js` in the `backend/` folder and `yarn start` in the `frontend/my-app/` folder and the application will open in your default browser. 

**NOTE: the Yelp API doesn't support CORS. The workaround to this is with cors-anywhere, a proxy that is used to bypass the CORS restrictions. If you are running into an issue where you are trying to query recommendations on our Search page and are not seeing results, please navigate to https://cors-anywhere.herokuapp.com/corsdemo and request temporary access to the demo server. Upon reloading the page, search queries should work as expected.**
