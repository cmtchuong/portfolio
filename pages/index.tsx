import React, { useEffect, useRef, useState } from "react";
import Desktop from "@components/Layout/Desktop";
import Mobile from "@components/Layout/Mobile";

const Portfolio: React.FC = () => {
  

 

  return (
    <div>
      <div className="xl:block hidden"><Desktop/></div>
      <div className="xl:hidden"><Mobile/></div>
    </div>
    
  );
};

export default Portfolio;
