import {Routes,Route} from 'react-router-dom'
import AppContainer from '../AppContainer';
import LoginPage from '../views/login/LoginPage';
import NotFound from '../views/NotFound';
import  Dashboard  from '../views/dashboard/Dashboard';
import FarmerList from '../views/farmer/FarmerList';
import FarmerInformation from '../views/farmer/FarmerInformation';
import Loan from '../views/farmer/Loan';
import Document from '../views/farmer/Document';
//import FarmerDetail from '../views/farmer/FarmerDetail';

const RoutePage = () =>{
  return <Routes>
   <Route path="/" element={<AppContainer />}>
        {/* Nested Routes */}
        <Route path="/home" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/farmer" element={<FarmerList />} />
        <Route path="/farmerinformation" element={<FarmerInformation />} />
        <Route path="/farmerloan" element={<Loan />} />
        <Route path="/Document" element={<Document />} />





      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />  
  </Routes>
  
}
export default RoutePage