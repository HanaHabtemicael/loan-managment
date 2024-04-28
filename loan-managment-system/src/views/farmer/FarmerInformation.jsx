import useFarmerData from '../../url/farmer/FarmerDataService';

const FarmerInformation = ({ props }) => {
  const farmerData = useFarmerData();

  if (!farmerData) {
    return <div>Loading...</div>;
  }
    return (
        <div className="bg-white flex flex-col flex-wrap h-90 w-95  mt-6">
            <div className="mx-auto  mt-3">
                <h1>
                {farmerData.FullName}'s  Information
                </h1>
                </div>
                <div className="bg-white flex flex-row mt-4 gap-4 ">
                <div className=" flex   w-1/4  p-4">
                    <div>
                    <header className="text-weight-600">Demography Data</header>
                    <p>Gender:{farmerData.Gender}</p>
                    <p>Age:{farmerData.Age}</p>
                   <p>Number Of Dependents:{farmerData.Credit_History}</p>
                   <p>Family Home Stead:{farmerData.Homestead}</p>
                   <p>Social Status:{farmerData.Social_status}</p>
                    </div>
                </div>
                    
                    
                      <div className="bg-gray h-13  border-r border-gray-300"></div>
                    
                    

                <div className="flex-1 w-1/4 p-4"> 
                    <header>Income Proxy Date</header>
                    <p>Income From Wheat Sale:{farmerData.Estimated_income}</p>
                    <p>Cost of planned wheat farm:{farmerData.Estimated_cost}</p>
                    <p>Costs to produce other crops:{farmerData.Estimated_expenses}</p>
                    <p>Income from off-farm activities:{farmerData.Estimated_income}</p>
                    <p>Loan outstanding from other sources:{farmerData.Active_loan}</p>
                </div>
                <div className="bg-gray h-13  border-r border-gray-300"></div>

                <div className="flex-1 w-1/4 p-4"> 
                    <p>Land ownership model:{farmerData.Asset_ownership}</p>
                    <p>Land title availability:{farmerData.Land_title}</p>
                    <p>Land size allocated to wheat:{farmerData.Credit_History}</p>
                    <p>Total land size owned:{farmerData.Land_size}</p>
                    <p>Water reserves access:{farmerData.Credit_History}</p>
                    <p>Farm tool ownership:{farmerData.Credit_History}</p>
                    <p>Output storage:{farmerData.Credit_History}</p>
                    <p>Number of livestock owned:{farmerData.Credit_History}</p>
                </div>
           </div>
        </div>
    );
};

export default FarmerInformation
