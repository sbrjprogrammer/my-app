import React from 'react'

export function LoginComp(props) {
    

    return (
        <>
          <form action="">
              <div className='form_inner'>
                  <h2>login</h2>
                  {/* error */}

                  <div className='form-group'>
                      <label htmlFor="name">Name:</label>
                      <input type="text" name='name' id='name' />
                  </div>
                  <div className='form-group'>
                      <label htmlFor="email">email:</label>
                      <input type="email" name='email' id='email' />
                  </div>
                  <div className='form-group'>
                      <label htmlFor="password">password:</label>
                      <input type="password" name='password' id='password' />
                  </div>

              </div>
              
              </form>  
        </>
    )
}
