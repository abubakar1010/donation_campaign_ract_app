import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DisplayCards = ({element}) => {

    const {id, image, title, price, donation_type} = element
    
    return (
        <>
            <NavLink to={`/featuredDetails/${id}`}>
            <div className=' self-center justify-self-center py-8 px-8 rounded-xl shadow-xl '>
                <div>
                <img src={image} className=' rounded-lg w-[320px] h-[200px] object-cover' alt="" />
                </div>
                <div>
                    <Button size='sm' className=' my-4'>{donation_type}</Button>
                    <p className=' text-xl font-medium'>{title}</p>
                </div>
            </div>
            </NavLink>
        </>
    );
};

DisplayCards.propTypes = {

    element: PropTypes.object.isRequired
}
export default DisplayCards;