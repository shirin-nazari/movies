
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import env from 'react-dotenv';
import { Provider } from 'react-redux';
import { store } from './store/store';

// setUp axios 
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

axios.defaults.headers.common['Authorization'] = `Bearer ${env.REACT_APP_ACCESS_TOKEN_KEY}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
