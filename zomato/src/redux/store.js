import { createStore } from 'redux'
import loginReducer from '../redux/reducer'

const store = createStore(loginReducer)

export default store