import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sneaker from "../../assets/icons/sneaker.png";
import recover from "../../assets/icons/recover.png";
import register from "../../assets/icons/register.jpg";
import style from "./UserForm.module.css"


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
            <div className= {`${style.user_form} ${style.text_center} ${style.justify_center} ${style.text_default}`}>
                <div className={style.form} style={{ display: `${loginDisplay}` }}>
                    <div className={style.logo}>
                        <img src={sneaker}></img>
                    </div>
                    <h2 className={style.greeting_login}>Great to have you back!</h2>
                    <form className={style.login_form}>
                        <input type='text' className={style.mb_1} id={style.Email_Address} placeholder='Email Address' required></input>
                        <input type='password' className={style.mb_1} id={style.Password} placeholder='Password' required></input>
                        <a className={`${style.recover_form_change} ${style.link}`} href="javascript:void(0)" onClick={() => SetFormDisplay('Recover')}>Forget your password? </a>
                        <input type='submit' className={style.btn} value='SIGN UP'></input>
                        <div className={style.register_form_change}>
                            <span>Don't have an account? </span><a className={style.link} href="javascript:void(0)" onClick={() => SetFormDisplay('Register')}>Register now </a>
                            {/* <i className='arrow-right'>
                            ::before
                        </i> */}
                        </div>
                    </form>
                </div>
                <div className={style.form} style={{ display: `${registerDisplay}` }}>
                    <div>
                        <img src={register}></img>
                    </div>
                    <h2 className={style.title_register}>REGISTER</h2>
                    <form className={style.register_form}>
                        <input type='text' className={style.mb_1} id={style.Email_Address} placeholder='Email Address' required></input>
                        <input type='password' className={style.mb_1} id={style.Password} placeholder='Password' required></input>
                        <input type='submit' className={style.btn} value='REGISTER'></input>
                        <div className={style.sign_up_form_change}>
                            <a className={style.link} href="javascript:void(0)" onClick={() => SetFormDisplay('Login')}>Back to login </a>
                        </div>
                    </form>
                </div>
                <div className={style.form} style={{ display: `${recoverDisplay}` }}>
                    <div>
                        <img src={recover}></img>
                    </div>
                    <h2 className={style.title_recover}>RESET YOUR PASSWORD</h2>
                    <form >
                        <input type='text' id={style.Email_Address} placeholder='Email Address' required></input>
                        <input type='submit' className={style.btn} value='SUBMIT'></input>
                        <div className={style.sign_up_form_change}>
                            <a className={style.link} href="javascript:void(0)" onClick={() => SetFormDisplay('Login')}>Cancel </a>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default UserForm;