import React, { useState } from 'react'
import "./ContactForm.css"
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactForm({
    scrollToWarrantySection,
    scrollToFaqSection
}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [products, setProducts] = useState("");
    const [province, setProvince] = useState("");
    const [inquiry, setInquiry] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [occupation, setOccupation] = useState("");
    const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreeToTerm, setAgreeToTerm] = useState(false);

  const navigate = useNavigate()

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(!agreeToTerm)
    {
        alert("Please agree to Terms and conditions")
        return
    }
    setLoading(true);
    axios
      .post("/send-contact-form-main", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        // product: products,
        // province: province,
        inquiry: inquiry,
        // zipCode: zipCode,
        // occupation: occupation,
        company: company,
        phoneNum:phone,
        message:message,
        formType: "Message genrated through Contact form",
      })
      .then((response) => {
        if (response.data.msg === "success") {
          setError(false);
          setSuccess("Message sent Successfully!");
          setLoading(false);
          setEmail("");
          window.open("/thank-you", '_blank');
        } else if (response.data.msg === "fail") {
          setSuccess(false);
          setError("Failed to send message, try again by reloading the page.");
          setLoading(false);
          setEmail("");
        }
      });
  };
  
  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, ''); 
    const maxLength = 25;


    if (numericValue.length <= maxLength) {
      setPhone(numericValue);
    }
  };
  const handleFirstNameChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(inputValue) || inputValue === '') {
      setFirstName(inputValue);
    }
  };
  const handleLastNameChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(inputValue) || inputValue === '') {
      setLastName(inputValue);
    }
  };
  return (
    <div className='ContactForm-container'>
        <div className='container '>
            <div className='row '>
                <div className='col-lg-6 pt-5'>
                    <h3 className='body-heading color-light mt-4'>Contact Us</h3>
                    <p className='body-paragraph color-light'>
                        Let’s talk about your next project.
                        <br></br>
                        Please fill out the form below and we will contact you promptly.
                        <br></br>
                        Your reply will be sent to the email address that you submit.
                    </p>
                    <p className='body-paragraph color-light mt-5'>
                        Whatever you're looking for,
                        <br></br>
                        Our team is here to help
                    </p>

                    <div className='row service-container g-3 '>

                        <div className='col-lg-6 d-flex align-items-center gap-3 px-2' onClick={scrollToFaqSection}>
                            <div className='d-flex align-items-center gap-3 w-100'>
                                <img src='/images/icons/contact-icon-1.png' alt="faq" />
                                <p className='body-paragraph color-light mb-0'>FAQs</p>
                            </div>
                        </div>
                        {/* <div className='col-lg-6 d-flex align-items-center gap-3 px-2'>
                            <div className='d-flex align-items-center gap-3 w-100'>
                            <img src='/images/icons/contact-icon-2.png' alt="sales" />
                            <p className='body-paragraph color-light mb-0'>Find a Sales rep</p>

                        </div>
                        </div> */}

                        {/* <div className='col-lg-6 d-flex align-items-center gap-3 px-2'>
                            <div className='d-flex align-items-center gap-3 w-100'>
                            <img src='/images/icons/contact-icon-3.png' alt="buy" />
                            <p className='body-paragraph color-light mb-0'>Where to buy</p>

                        </div>
                        </div> */}
                        <div className='col-lg-6 d-flex align-items-center gap-3 px-2' onClick={scrollToWarrantySection}>
                            <div className='d-flex align-items-center gap-3 w-100'>
                            <img src='/images/icons/contact-icon-4.png' alt="Warranty" />
                            <p className='body-paragraph color-light mb-0'>WARRANTY</p>

                        </div>
                        </div>

                    </div>
                </div>
                <div className='col-lg-6 py-lg-0 py-5 '>
                     <form className='form d-flex flex-column gap-3 p-4 pt-5' onSubmit={formSubmitHandler}>
                        {/* <div className='row'>
                            <div className='col-lg-6'>
                                <label>Products</label>
                                <select 
                                    placeholder="select"
                                    className='input-field w-100'
                                    required
                                    value={products}
                                    onChange={(e)=>{setProducts(e.target.value)}}
                                >
                                    <option value="" disabled hidden>Select</option>
                                    <option value="Product">Product</option>
                                </select>
                            </div>
                            <div className='col-lg-6'>
                                <label>Type of Inquiry</label>
                                <select 
                                    placeholder="Type of inquiry"
                                    className='input-field w-100'
                                    required
                                    value={inquiry}
                                    onChange={(e)=>{setInquiry(e.target.value)}}
                                >
                                    <option value="" disabled hidden>Select</option>
                                    <option value="Inquiry">Inquiry</option>
                                </select>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <label>Province/Territory</label>
                                <select 
                                    placeholder="Province/Territory"
                                    className='input-field w-100'
                                    required
                                    value={province}
                                    onChange={(e)=>{setProvince(e.target.value)}}
                                >
                                    <option value="" disabled hidden>Select</option>
                                    <option value="Province">Province</option>
                                </select>
                            </div>
                            <div className='col-lg-6'>
                                <label>Zip Code</label>
                               
                                <input 
                                type="text" 
                                value={zipCode}
                                required
                                onChange={(e)=>{setZipCode(e.target.value)}}
                                placeholder=""  
                                className='w-xl-50 w-100 input-field' 
                                />
                            </div>

                        </div> */}
                        <div className='row gy-3'>
                            <div className='col-lg-6'>
                                <label>First Name</label>
                                <input 
                                type="text" 
                                value={firstName}
                                required
                                onChange={handleFirstNameChange}
                                placeholder=""  
                                className='w-xl-50 w-100 input-field' 
                                />
                            </div>
                            <div className='col-lg-6'>
                                <label>Last Name</label>
                               
                                <input 
                                type="text" 
                                value={lastName}
                                required
                                onChange={handleLastNameChange}
                                placeholder=""  
                                className='w-xl-50 w-100 input-field' 
                                />
                            </div>

                        </div>
                        <div className='row gy-3'>
                            <div className='col-lg-6'>
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    value={email}
                                    required
                                    maxLength="66"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="" 
                                    className='w-xl-50 w-100 input-field' />
                            </div>
                            <div className='col-lg-6'>
                                <label>Phone Number</label>
                               
                                 <input 
                                    type="tel" 
                                    value={phone}
                                    maxLength="25"
                                    required
                                    onChange={handlePhoneChange}
                                    placeholder="" 
                                    className='input-field w-100' />
                            </div>

                        </div>
                        <div className='row gy-3'>
                            <div className='col-lg-6'>
                                <label>Company Name</label>
                                <input 
                                    type="text" 
                                    value={company}
                                    required
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="" 
                                    className='w-xl-50 w-100 input-field' />
                            </div>
                            <div className='col-lg-6'>
                                {/* <label>Occupation</label>
                               
                                  <select 
                                    placeholder=""
                                    className='input-field w-100'
                                    required
                                    value={occupation}
                                    onChange={(e)=>{setOccupation(e.target.value)}}
                                >
                                    <option value="" disabled hidden>Select</option>
                                    <option value="Occupation">Occupation</option>
                                </select> */}
                                <label>Inquiry</label>
                                 <input 
                                    type="text" 
                                    value={inquiry}
                                    required
                                    onChange={(e) => setInquiry(e.target.value)}
                                    placeholder="" 
                                    className='w-xl-50 w-100 input-field' />
                            </div>

                        </div>
                    <div className="col-lg-12">
                        <label>Comment (Optional)</label>
                        <textarea 
                        className="input-field w-100" 
                        value={message}
                        maxLength="550"
                        required
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4} placeholder="Write Text"
                        ></textarea>
                    </div>
                    
                    <div className='col-lg-12 d-flex align-items-start gap-3 '>
                        <input 
                            type='checkbox'
                            className='mt-2'
                            value={agreeToTerm}
                            onChange={(e)=>{setAgreeToTerm(e.target.value)}}
                        />
                        <p className='body-paragraph color-dark mb-0'>By providing your details and clicking Submit, you acknowledge and agree to our website <span onClick={()=>{navigate("/terms-condition")}}>Terms & Condition</span> </p>

                    </div>
                      
                        <button className="genral-btn  mt-2 submit-btn mx-auto" type='submit'>Submit
                        {loading ? (
                                    <Spinner
                                        animation="border"
                                        role="status"
                                        style={{ color: "white" ,width:"15px",height:"15px",marginLeft:"10px"}}
                                    />
                                ) : (
                                success ? (
                                    <div>
                                    {setLoading(false)}
                                    {setSuccess(false)}
                                    </div>
                                ) : (
                                    error && (
                                    <div>
                                        {setLoading(false)}
                                        {alert(error)}
                                        {setError(false)}
                                    </div>
                                    )
                                )
                                )}
                  
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactForm