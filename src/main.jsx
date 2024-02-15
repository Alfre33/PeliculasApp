import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './normalize.css'
import Footer from './components/footer'
import Header from './components/Header'
import Navbar from './components/navbar'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>,
)
