import React, { useState } from 'react'

export default function UserAuth() {
    const [user, setUser] = useState("");



    

  return (
    <div className='Authentication-page'>
        <div className="fle">
            {
            

            }


           <div className='Login-area'> 
                <h3 className='text-2xl my-3'>Login Here....!</h3>
                <div>
                    <form action="" onSubmit={''}>
                        <label htmlFor="email">Write Your Email</label>
                        <input type="email" placeholder='Your Email' />
                        <br />
                        <label htmlFor="password" placeholder='Enter Your Password'></label>
                        <input type="password" name="password" placeholder='Your Password..' id="" />
                        <input type="submit" value="Submit" />
                    </form>

                    <div className="google-signIn">
                        <button onClick={''}>Google SignIN</button>
                    </div>
                </div>
           </div>
        </div>    
    </div>
  )
}
