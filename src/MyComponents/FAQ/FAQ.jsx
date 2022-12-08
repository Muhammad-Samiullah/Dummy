import React from 'react';
import './FAQ.css';
import { useEffect, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import $ from 'jquery';
AOS.init();

const FAQ = () => {
    const [data, setdata] = useState([]);
    const [err, seterr] = useState(false)
    const getFaq = async () => {
        try{
        let data = await fetch('http://127.0.0.1:5000/faq', {
            method: "POST"
        })
        let res = await data.json();
        let d = res["data"];
        setdata(d);
    } catch(e){
        seterr(true);
    }
    }
    useEffect(() => {
        getFaq()
    }, []);

    $(document).ready(function () {
        // Handler for .ready() called.
        $('html, body').animate({
            scrollTop: $('#faq-section').offset().top
        }, 'fast');
    });

    return (
        <div className='paralax-container'>
            <div className='paralax d-flex justify-content-center'></div>
            <div className='text-light d-flex justify-content-center align-items-center m-3 para'>
                <div>
                    <div className='bg-dark title d-flex justify-content-center align-items-center'>Career Coach</div><br />
                    <h1 className='text-white text'>Most Questions Asked by Users Related to Career Guidance</h1>
                </div>
            </div>

            <div className='paralax-div bg-light' id='faq-section'>
                {err ? <div className='bg-white text-dark mx-5 p-5 rounded'>There is Error is Server Try Later..... SORRY for inconvinence.</div>:
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="accordion mx-3" id="accordionExample">
                            {data.map((d, i) => ((
                                <div key={i}>
                                    <div data-aos="flip-up" className="accordion-item my-3">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#conn" + i} aria-expanded="true" aria-controls={"conn" + i}>
                                                QUESTION NO  {i + 1}<br /> {d.question}
                                            </button>
                                        </h2>
                                        <div id={"conn" + i} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                {d.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))}
                        </div>
                    </div>
}
            </div>

        </div>
    )
}

export default FAQ
