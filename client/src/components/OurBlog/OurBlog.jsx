import React, { Component } from 'react'

import ourBlogStyle from "./OurBlogStyle.module.css"
import CardBlog from '../CardBlog/CardBlog'

const OurBlog = () =>
{
    return (
        <section className={ourBlogStyle.sectionContainer}>
            <div className={ourBlogStyle.headerBlog}>
                <h1>Our Blog</h1>
            </div>

            <div className={ourBlogStyle.separator}>
                <span> <b>&#x02666;</b> </span>
            </div>

            <CardBlog />
            
        </section>
    )
}

export default OurBlog
