
export default function TotalAmount() {

   


  return (
    <div className='total-amound p-3  shadow-md'>
            <h3 className='font-[25px] text-center my-4'>Total Amount</h3>
        <div>
            <ul>
                <li>Total Product: <span className='font-[600] text-red-600'>05</span></li>
                <li>Vat: <span className='font-[600] text-red-600'>05</span></li>
            </ul>
            <div className='text-[22px] font-[600] flex justify-between'>
                <span>
                    <h4 className=''>Total Amount</h4>
                </span>
                <span className=''>
                    150 TK
                </span>
            </div>

        </div>
    </div>
  )
}
