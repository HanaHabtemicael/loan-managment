import {Routes,Route} from 'react-router-dom'
import AppContainer from '../AppContainer';
import LoginPage from '../views/login/LoginPage';
import NotFound from '../views/NotFound';
import Side from '../components/Side';

const RoutePage = () =>{
  return <Routes>
    <Route path='/home' element={<AppContainer />}/>
     <Route path='/login' element={<LoginPage />} />
     <Route path = '/side' element={<Side/>} />
     <Route path="*" element={<NotFound />}/>   
  </Routes>
  
}
export default RoutePage