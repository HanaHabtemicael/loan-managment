const FarmerInformation = () => {
    return (
        <div className="bg-white flex flex-col w-86 m-5 h-90 ">
            <div className="mx-auto mt-3">
                <h1>
                    tola's Information
                </h1>
                </div>
                <div className="bg-white flex flex-row mt-3 gap-4 ">
                <div className="flex-1 w-1/4  p-4">
                   <header className="text-weight-600">Demography Data</header>
                   <p>Gender:</p>
                   <p>Age:</p>
                   <p>Number Of Dependents:</p>
                   <p>Family Home Stead:</p>
                   <p>Social Status:</p>
                   <hr></hr>
                </div>

                <div className="flex-1 w-1/4 p-4"> 
                    <header>Income Proxy Date</header>
                    <p>Income From Wheat Sale:</p>
                    <p>Cost of planned wheat farm:</p>
                    <p>Costs to produce other crops:</p>
                    <p>Income from off-farm activities:</p>
                    <p>Loan outstanding from other sources:</p>
                </div>
                <hr/>

                <div className="flex-1 w-1/4 p-4"> 
                    <p>Land ownership model:</p>
                    <p>Land title availability:</p>
                    <p>Land size allocated to wheat:</p>
                    <p>Total land size owned:</p>
                    <p>Water reserves access:</p>
                    <p>Farm tool ownership:</p>
                    <p>Output storage:</p>
                    <p>Number of livestock owned:</p>
                </div>
           </div>
        </div>
    );
};

export default FarmerInformation;
