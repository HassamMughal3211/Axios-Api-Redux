import logo from './logo.svg';
import './App.css';
import { getData } from './redux/actions';
import {  useDispatch, useSelector } from 'react-redux';



function App() {
  const data = useSelector(state => state.Data)
 
  const dispatch = useDispatch();
  return (
    <div className="App">
     <button onClick={()=>{getData(dispatch)
     console.log(data.map(x=>x.id))}}> hello</button>
    </div>
  );
}

export default App;
