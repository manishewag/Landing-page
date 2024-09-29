/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react"
import Masthead from "./component/Masthead"
import Icon from "./component/Icon"
import Image from "./component/Image"
import Testimonial from "./component/Testimonial"
import Action from "./component/Actoin"

function App() {

    return <>

      {/* <!-- Navigation--> */}
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav> 
           
        <Masthead/>
        <Icon/>
        <Image/>
        <Testimonial/>
        <Action/>
      
     {/* <!-- Footer--> */}
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!">About</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contact</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-facebook fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-twitter fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i className="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>

}

export default App


