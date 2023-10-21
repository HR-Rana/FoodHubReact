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
        <h3 className='text-center text-[25px] font-[700] my-8'>Chef details no : <span className='text-red-600'>{id}</span> </h3>


        <div className='my-10'>
            <div className='w-1/4 mx-auto border-b-2 shadow-lg p-5'>
                <img src={item.img} className='text-center' alt="chef img" />
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}
