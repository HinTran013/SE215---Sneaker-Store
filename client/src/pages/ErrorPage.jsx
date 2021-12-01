import React from "react";
import { Link } from 'react-router-dom'
import Style from "../pageStyle/ErrorPage.module.css"

function Page404() {
    return (
        <>
        <div className={Style.contentPage}>
            <div className='img-error'>
                <img src='//cdn.shopify.com/s/files/1/0145/5613/5478/files/404.png?v=1569035759'/>
            </div>
            <h3 className={Style.errorTitle}>We are sory, the page you’ve requested is not available</h3>
            <Link className={Style.buttonBack} to='/'>BACK TO HOME</Link>
        </div>
        </>
    )
}

export default Page404