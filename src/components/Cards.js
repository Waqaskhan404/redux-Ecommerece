import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cards() {
  const products = useSelector((state) => state.allproducts.products);
  const rednderList=products.map((product)=>{
    return( 
    <Link to={`products/${product.id}`} key={product.id}>
    <div className="rounded overflow-hidden shadow-lg" >
      <div className="flex justify-center">
      <img className="w-40 " src={product.image} alt="Mountain"/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{product.title}</div>
        <p className="text-gray-700 text-base text-center">
          {product.category}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price : ${product.price}</span>
      </div>
    </div>
    </Link>
    )
  })
  
  return (
    <>
      <div className="p-10 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5  container px-24">
      {rednderList}

      </div>
     
    </>
  );
}

export default Cards;
