import {createRoot} from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ContactReducer from './Services/Reducer/ContactReducer'

const store = createStore(ContactReducer, composeWithDevTools())

const nodeDom = document.getElementById('root')
const root = createRoot(nodeDom)
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)