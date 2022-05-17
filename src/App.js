import { makeStyles, Paper} from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './App.css';
import Sidebar from './components/sideMenu/sidebar.jsx'
import Header from './components/Header';
import { People} from '@mui/icons-material';
import Footer from './components/Footer';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {Dashboard , DashboardOne,DashboardTwo,DashboardThree} from './pages/Dashboard';
import { Overview } from './pages/Overview';
import { Myliaves } from './pages/Myleaves';
import Advanced from './pages/Advanced';
import axios from 'axios';



const url = 'https://yts.mx/api/v2/list_movies.xml';




const useStyles = makeStyles(theme => ({
  appMain: {
    paddingLeft: '260px',
    width: '100%'
  },
  pageContent : {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

function App() {

 const [data,setData] = useState();

         useEffect(() => {
           axios.get(url)
           .then(res => {
             console.log(res.data)
             setData(res)
           }).catch(err => {
             console.log(err)
           })
         },[])

  const classes = useStyles()

  return (
    <> 
    <Router> 
      <Sidebar/>
      <Routes>
        <Route exact path='/dashboard' element={<Dashboard/>} />
         {/*The start of submenus of dashboard*/}
         <Route exact path='/dashboard/dashboard1' element={<DashboardOne/>}/>
         <Route exact path='/dashboard/dashboard2' element={<DashboardTwo/>}/>

         <Route exact path='/overview' element={<Overview/>} />
         <Route exact path='/myleaves' element={<Myliaves/>} />
         <Route exact path='/advance' element={<Advanced/>} />
      </Routes>
    </Router>  

    <div className={classes.appMain}>
      <Header/>

      <Footer/>
      </div>
      </>
  );
}

export default App;
