<!-- Catch all the changes to the application in this file for each version -->

## Version 1.0.0 Changes
-- React + TypeScript + PWA basic project set up

## Initial Commit
-- Create React App with Typescript - https://create-react-app.dev/docs/adding-typescript/
-- No need to handle webpack configuration or server.js configuration.
-- Install all Typescript related dependencies.
-- Updated tsconfig.json.
-- Updated Index.tsx and registered the serviceWorker for PWA feature.
-- Install @reduxjs/toolkit - Redux Starter Kit saves all efforts of initial Redux set up
   https://redux-toolkit.js.org/tutorials/advanced-tutorial
-- Used Husky and Preetier lint packages for coding standards.
-- Create Store using configureStore from @reduxjs/toolkit to combine reducers.
-- Create Slice - A combination of Action and Reducer which reduced a lot of redundent code.
-- Integrated React component with Redux using Reacts Hooks API instead of Connect function.
   useSelector instead of mapStateToProps, useDispatch instead of mapDispatchToProps and useEffect.
-- Integrated redux-thunk as a middleware for the server side call.  