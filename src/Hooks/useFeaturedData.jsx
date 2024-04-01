import { useEffect, useState } from "react";

const useFeaturedData = () => {

    const [ getData, setGetData ] = useState([])

    const [loader, setLoader] = useState(true)

    useEffect(() => {

        setLoader(true)
        fetch('featured.json')
        .then( response => response.json())
        .then( response => setGetData(response))

        setLoader(false)
    },[])
    return {getData, loader}
};

export default useFeaturedData;