import React, { useState } from 'react'
import './UserForm.css'
import sneaker from "../../assets/icons/sneaker.png";
import recover from "../../assets/icons/recover.png";
import register from "../../assets/icons/register.jpg";


function UserForm() {
    const [loginDisplay, setLoginDisplay] = useState('block')
    const [registerDisplay, setRegisterDisplay] = useState('none')
    const [recoverDisplay, setRecoverDisplay] = useState('none')

    function SetFormDisplay(form) {
        setLoginDisplay('none');
        setRecoverDisplay('none');
        setRegisterDisplay('none');
        switch (form) {
            case 'Login':
                setLoginDisplay('block');
                break;
            case 'Register':
                setRegisterDisplay('block');
                break;
            case 'Recover':
                setRecoverDisplay('block');
                break;
        }
    }

    return (
        <>
            <div className='user_form text-center justify-center text_default'>
                <div className='form_login_popup form' style={{ display: `${loginDisplay}` }}>
                    <div className='logo_login_form logo'>
                        <img src={sneaker}></img>
                    </div>
                    <h2 className='greeting_login'>Great to have you back!</h2>
                    <form className='login_form'>
                        <input type='text' className='mb-1' id='Email_Address' placeholder='Email Address' required></input>
                        <input type='password' className='mb-1' id='Password' placeholder='Password' required></input>
                        <a className='recover_form_change' href="javascript:void(0)" onClick={() => SetFormDisplay('Recover')}>Forget your password? </a>
                        <input type='submit' className='btn' value='SIGN UP'></input>
                        <div className='register_form_change'>
                            <span>Don't have an account? </span><a href="javascript:void(0)" onClick={() => SetFormDisplay('Register')}>Register now </a>
                            {/* <i className='arrow-right'>
                            ::before
                        </i> */}
                        </div>
                    </form>
                </div>
                <div className='form_register_popup form' style={{ display: `${registerDisplay}` }}>
                    <div className='logo_register_form logo'>
                        <img src={register}></img>
                    </div>
                    <h2 className='title_register'>REGISTER</h2>
                    <form className='register_form'>
                        <input type='text' className='mb-1' id='Email_Address' placeholder='Email Address' required></input>
                        <input type='password' className='mb-1' id='Password' placeholder='Password' required></input>
                        <input type='submit' className='btn' value='REGISTER'></input>
                        <div className='sign_up_form_change'>
                            <a href="javascript:void(0)" onClick={() => SetFormDisplay('Login')}>Cancel </a>
                        </div>
                    </form>
                </div>
                <div className='form_recover_popup form' style={{ display: `${recoverDisplay}` }}>
                    <div className='logo_recover_form logo'>
                        <img src={recover}></img>
                    </div>
                    <h2 className='title_recover'>RESET YOUR PASSWORD</h2>
                    <form >
                        <input type='text' id='Email_Address' placeholder='Email Address' required></input>
                        <input type='submit' className='btn' value='SUBMIT'></input>
                        <div className='sign_up_form_change'>
                            <a href="javascript:void(0)" onClick={() => SetFormDisplay('Login')}>Cancel </a>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default UserForm;