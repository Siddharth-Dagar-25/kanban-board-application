import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
// import Card from './components/Card/Card';
import Body from './components/Body';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './utils/dataAction';
import Loader from '../src/components/Loader';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <Navbar/>
      <hr style={{marginTop : "10px"}} />
      <Body/>
    </div>
  ) : <Loader/>
}

export default App