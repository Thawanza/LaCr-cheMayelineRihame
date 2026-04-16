import React, { useState } from 'react'
import './Testimonials.css'
import { Pagination } from 'antd';

import comment_Data from '../../assets/comment'
function Testimonials() {
    const [page, setPage] = useState(1);
    const pageSize = 1;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const currentData = comment_Data.slice(start, end);

    return (
        <div id='testimonials' className='testimonials'>
            <div className="testimonial-title">
                <h1>Témoignages</h1>

            </div>
            <div className="testimonials-container">
                {currentData.map((test, index) => {
                    return <div key={index} className="testimonials-format">


                        <img src={test.s_icon} alt="" />
                        <p>" {test.s_details} "</p>
                        <h3>-- {test.s_name}</h3>


                    </div>
                })}

            </div>
            <div className="pagination-container">
                <Pagination
                    current={page}                 // page actuelle
                    total={comment_Data.length}    // nombre total d’items
                    pageSize={pageSize}            // combien par page
                    onChange={(value) => setPage(value)}  // changer la page
                />
            </div>
        </div>
    )
}

export default Testimonials