import React, { useState } from 'react'
import "./SubscribeLetter.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';



function SubscribeLetter() {
 const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    const formSubmitHandler = (e) => {
      e.preventDefault();
      setLoading(true);
      return;
      axios
        .post("/send-newsletter", {
          email: email,
          formType: "Newsletter",
        })
        .then((response) => {
          if (response.data.msg === "success") {
            setError(false);
            setSuccess("Newsletter Subscribed Successfully!");
            setLoading(false);
            setEmail("");
          } else if (response.data.msg === "fail") {
            setSuccess(false);
            setError("Email failed to send, try again by reloading the page.");
            setLoading(false);
            setEmail("");
          }
          })
        }

  return (
    <div className='SubscribeLetter-container standard-padding-space' id='subscribe'>
        <div className='container text-center my-lg-5 d-flex flex-column align-items-center'>
            <p className='sub-heading sub-heading-line color-gold d-flex align-items-center gap-2'>The Champion's Letter</p>
            <h2 className='body-heading font-moda color-light fst-italic'>DC's Sunday <br/> <span className='color-gold body-heading font-moda'>letter</span> to you.</h2>
            <p className='body-paragraph color-para-light mx-auto content-para'>Every Sunday morning, Donna Clarke writes to families who take the athletic journey seriously. One truth from her week. One coaching note for your athlete. One recipe from the kitchen that fuelled a 1984 Olympian and raised a major leaguer. The letter sports families call the most useful thing in their inbox.</p>

             <div className="col-lg-6 d-flex align-items-center justify-content-center mb-3 mt-4">
                        <form className='inp-container d-flex align-items-center justify-content-between' onSubmit={formSubmitHandler}>
                            <input 
                                type='text' 
                                placeholder='Enter your Email...'  
                                value={email}
                                maxLength="36"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className='inp-btn d-flex align-items-center gap-2 '>
                                <span>SUBSCRIBE</span>
                                {loading ? (
                                    <Spinner
                                    animation="border"
                                    role="status"
                                    style={{ color: "white", width: "15px", height: "15px", marginLeft: "10px" }}
                                    />
                                ) : (
                                    success ? (
                                    <div >
                                        {setLoading(false)}
                                        {alert(success)}
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

            <p className='body-paragraph bottom-text '>Weekly. Never sold. Unsubscribe anytime. Donna writes every word.</p>
        </div>

    </div>

  )
}

export default SubscribeLetter