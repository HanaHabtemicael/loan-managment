import {Routes,Route} from 'react-router-dom'
import AppContainer from '../AppContainer';
import LoginPage from '../views/login/LoginPage';
import NotFound from '../views/NotFound';

const RoutePage = () =>{
  return <Routes>
    <Route path='/home' element={<AppContainer />}/>
     <Route path='/login' element={<LoginPage />} />
     <Route path="*" element={<NotFound />}/>   
  </Routes>
  
}
export default RoutePage