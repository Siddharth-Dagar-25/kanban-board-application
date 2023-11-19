import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './dataReducer.js';

const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;