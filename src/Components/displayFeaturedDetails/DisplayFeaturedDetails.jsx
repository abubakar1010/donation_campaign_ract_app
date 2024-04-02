import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const DisplayFeaturedDetails = ({element}) => {
    console.log(element);

    const {image, title, price, description} = element
    return (
        <div className=' my-12'>
            <div className=' relative'>
                <img src={image} className=' h-[650px] w-[1360px] rounded-lg my-5 object-cover ' alt="" />
                <Button color='red' className=' absolute bottom-4 left-5'>Donate ${price}</Button>
            </div>

            <div className=' space-y-4'>
                <h1 className=' text-2xl font-bold'>{title}</h1>
                <p className=' '>{description}</p>
            </div>
            
        </div>
    );
};

DisplayFeaturedDetails.propTypes = {

    element: PropTypes.object
}

export default DisplayFeaturedDetails;