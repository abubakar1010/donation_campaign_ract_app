
import { Button } from "@material-tailwind/react";
import useFeaturedData from "../../Hooks/useFeaturedData";
import DisplayCards from "../DisplayCards/DisplayCards";
import { useState } from "react";


const Featured = () => {

    const {getData, loader} = useFeaturedData()

    const [displayData, setDisplayData ] = useState(12);



    const handleShowMore = () => {

        setDisplayData(getData.length)
    }

    return (
        <>
        <div className=" my-28">
            
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-24 ">
                {
                    getData.slice(0,displayData).map( element => <DisplayCards key={element.id} element={element} />)
                }
            </div>
            
            <div className={`text-center ${ getData.length === displayData && "hidden"}`}>
                <Button onClick={() => handleShowMore()} size="sm" className=" mt-12">Show More</Button>
            </div>
        </div>
        </>
    );
};

export default Featured;