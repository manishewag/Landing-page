// eslint-disable-next-line no-unused-vars
import React from "react";

function Masthead() {

    return <>

        {/* <!-- Masthead-->  */}
        <header className="masthead ">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white px-3">
                            {/* <!-- Page heading--> */}
                            <h3 className="mb-5 fs-2 fw-semibold">Generate more leads with a professional landing page!</h3>
                            <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                {/* <!-- Email address input--> */}
                                <div className="row">
                                    <div className="col px-5">
                                        <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                    </div>
                                    <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>




    </>
}

export default Masthead