import { useLoaderData, useParams } from "react-router-dom";
import useFeaturedData from "../../Hooks/useFeaturedData";
import { element } from "prop-types";
import DisplayFeaturedDetails from "../displayFeaturedDetails/DisplayFeaturedDetails";



const FeaturedDetails = () => {

    const data = useLoaderData();

    const paramId = useParams()

    console.log(data,paramId);

    const filteredData = data.filter( element => element.id === parseInt(paramId.id));

    console.log(filteredData);

    
    return (
        <div className=" container mx-auto">
            {
                filteredData.map( element => <DisplayFeaturedDetails key={element.id} element={element} />)
            }
        </div>
    );
};

export default FeaturedDetails;