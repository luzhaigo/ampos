# Ampos

- You can access the Ampos web app by this url https://luzhaigo.github.io/ampos/.
- `RWD`, you can access the web app by smartphone.
- Click load more button to get other 15 news.
- Support `searching`.
- Multiple pages. ex: News, Regions, Video, TV pages.
- By clicking each news card, the page will be redirected to news website.
- By clicking `logo`, the page will be redirected to news page.
- UI of `loading` status for API requests.
- Error handling for API request failed.
- Unit Tests.

## Docker

You can boot up the web app by:

### `docker run --name ampos -p 3000:80 yaf20030918/ampos`

To remove ampose container:

### `docker rm -f ampos`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!