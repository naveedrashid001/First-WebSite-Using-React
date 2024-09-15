import React from 'react';

function SignUp() {
  return (
    <div className='container'>
      <div className='col-6 offset-3 mt-3'>
        <form>
          {/* First input field */}
          <div className='pb-3'>
            <label className='form-label'>Name</label>
            <input type="text" name='uname' className='form-control w-100' />
          </div>

          {/* Second input field */}
          <div className='pb-3 mt-4'>
            <label className='form-label'>Email</label>
            <input type="email" name='uemail' className='form-control w-100' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
