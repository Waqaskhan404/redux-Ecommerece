import axios from 'axios'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProduct,removeProduct } from '../redux/action/Action'
function OneCard() {
    const product=useSelector(state=>state.product)
    const {image,price,description,title}=product
    console.log(product);
    const {productId}=useParams()
    const dispatch=useDispatch()

    const fetchProductDetail= async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>{
            console.log(err)
        });
        dispatch(selectProduct(response.data))
        }


    useEffect(() => {
        if(productId && productId !== "" )fetchProductDetail();
        return()=>{
          dispatch(removeProduct())

        }
    }, [productId])
    
    
  return (
    <div>
      <div className="p-10 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5  container px-24">
        {Object.keys(product).length===0 ? (
          <div ><h1 className='text-5xl text-center'>...Loading</h1> </div>
        ):(
<div className="rounded overflow-hidden shadow-lg" >
      <div className="flex justify-center">
      <img className="w-40 " src={image} alt={title}/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base text-center">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price : ${price}</span>
      </div>
    </div>
    )}
    </div>
    </div>
    
  )
}

export default OneCard