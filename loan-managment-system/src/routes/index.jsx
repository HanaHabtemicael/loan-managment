import {Routes,Route} from 'react-router-dom'
import AppContainer from '../AppContainer';
import LoginPage from '../views/login/LoginPage';
import NotFound from '../views/NotFound';
import  Dashboard  from '../views/dashboard/Dashboard';
import FarmerList from '../views/farmer/FarmerList';

const RoutePage = () =>{
  return <Routes>
   <Route path="/" element={<AppContainer />}>
        {/* Nested Routes */}
        <Route path="/home" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/farmer" element={<FarmerList />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />  
  </Routes>
  
}
export default RoutePage