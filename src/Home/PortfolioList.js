import React from 'react';
import { PortfolioImages } from './Images';
import PortfolioItem from './PortfolioItem';
function PortfolioList() {
  return (
    PortfolioImages().map((element, index)=>
    {
     return   <PortfolioItem key={index} imagePath={element} />
    })
  )
}

export default PortfolioList