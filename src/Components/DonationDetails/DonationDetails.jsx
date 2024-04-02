import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const DonationDetails = ({ element }) => {
  const { image, title, price, donation_type,id } = element;
  return (
    <>
      <div className=" my-12">
        <Card className="w-full max-w-[48rem] flex-row py-7 px-8">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={image}
              className=" rounded-lg w-[220px] h-[200px] object-cover"
            />
          </CardHeader>
          <CardBody>
            <Button  className="mb-4 uppercase" >{donation_type}</Button>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography color="gray" className="mb-8 text-lg font-medium text-left">
              $ {price}
            </Typography>
            <NavLink to={`/featuredDetails/${id}`}>

            <Button>View Details</Button>
            </NavLink>
          </CardBody>
        </Card>

        
      </div>
    </>
  );
};

DonationDetails.propTypes = {
  element: PropTypes.object,
};
export default DonationDetails;
