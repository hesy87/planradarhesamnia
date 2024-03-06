import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { store } from './store/store.js'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(

  //provide redux store for all children
  <Provider store={store}>
    <App />
  </Provider>,
)
