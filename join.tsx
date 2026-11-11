import React from 'react'
import Button from '@mui/material/Button';
import { FiArrowRight } from "react-icons/fi";

const Join = () => {
  return (
    <div className="w-full min-h-[50px] md:h-[123px] bg-[#39856D] flex items-center justify-center gap-10">
      <h1 className="text-white text-xl md:text-2xl font-bold tracking-[3px]">
        JOIN ADICLUB & UNLOCK MORE REWARDS
      </h1>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "black",
          padding: "12px 20px",
          fontWeight: "bold",
          gap: "16px",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#eeeeee",
            boxShadow: "none"
          }
        }}
      >
        SIGN UP FOR FREE
        <FiArrowRight className="text-2xl text-black" />
      </Button>
    </div>
  );
};

export default Join;