import axios from "axios";
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/Action";
import Cards from "./Cards";

function CardsList() {
  const products = useSelector((state) => state);
  const dispatch =useDispatch()

const fetchData=async()=>{
    const response=await axios
    .get('https://fakestoreapi.com/products')
    .catch((err)=>{console.log(err);
    });
    dispatch(setProducts(response.data))
}

  useEffect(() => {
   fetchData()

  }, [])
  
  
  return (
    <div>
     <Cards/>
    </div>
  );
}

export default CardsList;
