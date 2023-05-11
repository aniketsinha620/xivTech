import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css'
import "./Collaborate.css"


export default function Collaborate() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='body1'>



            <h2>Let's Collaborate</h2>




            <div className="card">

                <div className="airpa" data-aos="fade-up">
                    <div className="details">
                        <h1>AI + RPA is what we do</h1>
                        <p>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</p>
                        <div className="link">

                            <Link to="/Aipra" className="link-content"  >AI + RPA Automation <span className='arrow'>→</span></Link>

                        </div>
                    </div>
                    <div className="img">
                        <h1>AI + RPA is what we do</h1>
                        <img src="1.jpg" alt="" />
                    </div>
                </div>

                <div className="airpa" data-aos="fade-up">
                    <div className="details">
                        <h1>Make Bolder Choices</h1>
                        <p>Digital focused strategies to realize market-changing ideas</p>
                        <div className="link">

                            <Link to="/Choice" className="link-content">Build Better Apps <span className='arrow'>→</span></Link>

                        </div>
                    </div>
                    <div className="img">
                        <h1>Make Bolder Choices</h1>

                        <img src="p1.png" alt="" />
                    </div>
                </div>

                <div className="airpa" data-aos="fade-up">
                    <div className="details">
                        <h1>Innovate with Speed</h1>
                        <p>Create higher quality software, deliver on customer expectations and business goals</p>
                        <div className="link">

                            <Link to="/Dev" className='link-content'>DevOps <span className='arrow'>→</span></Link>

                        </div>
                    </div>
                    <div className="img">
                        <h1>Innovate with Speed</h1>
                        <img src="p2.jpg" alt="" />
                    </div>
                </div>

                <div className="airpa" data-aos="fade-up">
                    <div className="details">
                        <h1>Embrace Cloud</h1>
                        <p>With Cloud-First accelerate innovation and optimize performance</p>
                        <div className="link">

                            <Link to="/Cloudservice" className="link-content" >Cloud Services<span className='arrow'>→</span></Link>

                        </div>
                    </div>
                    <div className="img">
                        <h1>Embrace Cloud</h1>

                        <img src="p3.jpg" alt="" />
                    </div>
                </div>






            </div>
        </div >
    )
}
