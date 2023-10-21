import React from 'react'
import { useParams } from 'react-router-dom'
import { Chef } from '../../assets/ChefData/ChefData';

export default function ChefDetails() {
    const {id} = useParams();

    const item = Chef.find(item =>{
        return item.id == id
    })
    console.log(item)
  return (
    <div>
        <h3 className='text-center text-[25px] font-[700] my-8'>Chef details no : <span className='text-red-600'>{item.id}</span> </h3>


        <div className='my-10 shadow-lg p-5'>
            <div className='w-1/4 mx-auto border-b-2'>
                <img src={item.img} className='text-center' alt="chef img" />
            </div>
            <div className='text-center w-2/3 mx-auto'>
                <h3 className='text-[32px] my-5'><span className='text-red-500 font-bold'>{item.Name}</span></h3>
                <p>Chef Experienced : <span className='font-[600] text-red-600'>{item.exp}</span></p>
                <p>Reciepe done : <span className='font-[600] text-red-600'>{item.recepie}</span></p>
                <p className='my-5'>  <span className='font-[600] text-red-600'>About Chef:</span> {item.body}</p>
            </div>
        </div>
    </div>
  )
}
