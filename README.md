# GITHUB TOPIC EXPLORER
React application that shows github related topics of an expecified topic and its stargazers.

It uses **Github GraphQL API** to list [Topics](https://docs.github.com/en/graphql/reference/objects#topic) Objects and its [Stargazers](https://docs.github.com/en/graphql/reference/objects#stargazerconnection) count

## Tech notes
This application uses `vite` as the tool for bundling and running because its smaller and faster than other options like Create React App. For more details see [Why vite](https://vitejs.dev/guide/why.html).

## Dependencies
- **Apollo client** for graphql and react integration.
- **Jest** and **react-testing-library** for unit testing.

## Hot to run the app

- Download the app
```
git clone https://github.com/ivillamil/github-topic-explorer
```
- To interact with the Github GraphQL API you'll need to have a [Github Personal Access Token](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- Once you have your token, paste in the `.env` file:
```
VITE_GITHUB_TOKEN=<your_token_here>
```
- Download all module dependencies and run the app. In the project root folder run the following command:
#### yarn
```
yarn
yarn dev
```

or

#### npm
```
npm install
npm run dev
```

## How to test the app
- without coverage: `npm test` or `yarn test`
- with test coverage: `npm run coverage` or `yarn run coverage`

## Possible Further improvements
- Add unit tests for `App` component
- Add browser navigation to allow users to go backwards on search history
