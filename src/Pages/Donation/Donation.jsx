import { Button } from "@material-tailwind/react";
import DonationDetails from "../../Components/DonationDetails/DonationDetails";
import { getDataFromLocalStorage } from "../../Utils/LocalStorage";
import { useState } from "react";


const Donation = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const data = getDataFromLocalStorage() || [];

    
    if(data.length === 0){
        return <p>Data Not Found ..</p>
    }
    return (
        <>
        <div className=" my-20 container mx-auto">


        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 ">
            {data.slice(0, toggle? data.length : 4).map( element => <DonationDetails key={element.id} element={element} /> )}
        </div>
        
        <div className=" text-center">
            <Button className="" onClick={() => handleToggle()}> {
                toggle? "Show Less" : "ShoW All"
            } </Button>
        </div>

        </div>
        
        </>
    );
};

export default Donation;