import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reducer,{initialState} from "./component/reducer"
import reportWebVitals from './reportWebVitals';
// import { initialState } from './component/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode 
  // initialState={initialState} reducer={reducer}
  >
    {/* <DataLayer
     initialState ={initialState}
      reducer ={reducer}
      > */}
        <App />
    {/* </DataLayer> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
