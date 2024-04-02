import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Featured from "../../Components/Featured/Featured";
import useFeaturedData from "../../Hooks/useFeaturedData";


const Home = () => {

    const [text, setText] = useState("");
    const handleSearchField = (e) => setText(e.target.value);

    console.log(text);

    const {getData, loader} = useFeaturedData()

    const [filterData, setFilterData] = useState([]);

    useEffect( () => {
        setFilterData(getData)
    },[getData])

    const handleFilter = () => {

        const filterSearch = filterData.filter( element => element.donation_type.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        
        setFilterData(filterSearch)
    }
    return (
        <div className=" container mx-auto">
            <Banner handleSearchField={handleSearchField} setText={setText} text={text} handleFilter={handleFilter} />
            <Featured filterData={filterData} />
        </div>
    );
};

export default Home;