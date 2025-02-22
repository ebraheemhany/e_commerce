import "./Login.css";

export default function Login() {
  return (
    <div className='Login_sign'>
       <div className='Login_container'>
               <h1>Sign Up</h1>
           <div className='Logn_fildes'>
              <input type='text' placeholder='Your Name' />
              <input type='email' placeholder='Your Email' />
              <input type='pssword' placeholder='Your password' />
           </div>
            <button>Continue</button>
           <p className='Login_account'> Already have an account ? <span>Login here</span></p>
           <div className='Login_agree'>
            <input type='checkbox' name='' id='' />
            <p>i agreeto the terms of use & privacy policy</p>
           </div>

       </div>

    </div>
  )
}
