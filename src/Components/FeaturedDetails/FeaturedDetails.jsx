import { useLoaderData, useParams } from "react-router-dom";
import DisplayFeaturedDetails from "../displayFeaturedDetails/DisplayFeaturedDetails";



const FeaturedDetails = () => {

    const data = useLoaderData();

    const paramId = useParams()

    const filteredData = data.filter( element => element.id === parseInt(paramId.id));

    return (
        <div className=" container mx-auto">
            {
                filteredData.map( element => <DisplayFeaturedDetails key={element.id} element={element} />)
            }
        </div>
    );
};

export default FeaturedDetails;