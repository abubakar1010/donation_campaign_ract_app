import React from "react";
import { Button, Input } from "@material-tailwind/react";


const Banner = () => {

    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (
        <>
            <div className=" relative min-h-[570px] w-full flex justify-center items-center flex-col">
                <div className=" absolute inset-0 bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.6)),url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat rounded-lg "></div>
                {/* <img src="/images/hero.jpg" alt="" /> */}
                <div className="relative flex-col flex gap-12 justify-center items-center  w-full">
                <h1 className=" text-5xl font-bold">I Grow By Helping People In Need</h1>

                <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
      </div>
    </div>
            </div>
        </>
    );
};

export default Banner;