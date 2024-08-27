import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Landingpage.css";
const RefundPolicy =() =>{
    return( 
        <div>
          <Navbar/>
            <div className="m-3 ">
              <div className="MuiBox-root css-1kv5bgo row">
              <div className="col-12 col-sm-12 col-lg-12 bg-primary-subtle">
              <h1 className="m-5">
                  <center>Refund Policy</center> 
                </h1>
              </div>
              
              </div>
              <div className="MuiContainer-root MuiContainer-maxWidthXl css-1juen90">
                <ol>
                  <li>
                    <p>
                      Amount once paid through the payment gateway shall not be refunded
                      other than in the following circumstances:
                    </p>
                    <p>
                      Multiple times debiting of Customer's Card/Bank Account due to
                      technical error OR Customer's account being debited with excess amount
                      in a single transaction due to technical error. In such cases, excess
                      amount excluding Payment Gateway charges would be refunded to the
                      Customer directly by Anandpushp Jobtech Private Limited.
                    </p>
                    <p>
                      Due to technical error, payment being charged on the
                      Customer's&nbsp;Card/Bank Account but the crediting of
                      "Jobsineducation coins"is unsuccessful. Customer would be credited
                      with Jobsineducation coins as purchased by the Customer.
                    </p>
                  </li>
                  <li>
                    <p>
                      The Customer will have to make an application for refund along with
                      the transaction number and original payment receipt if any generated
                      at the time of making payments.
                    </p>
                  </li>
                  <li>
                    <p>
                      The application in the prescribed format should be sent to
                      <a
                        href="mailto:Damu123@gail.com"
                        style={{ color: "rgb(42, 87, 152)" }}
                      >
                        {" "}
                        Damu123@gail.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      The application will be processed manually and after verification, if
                      the claim is found valid, the amount received in excess will be
                      refunded by Anandpushp Jobtech Private Limited through electronic mode
                      in favor of the applicant and confirmation sent to the mailing address
                      given in the online registration form, within a period of 21 calendar
                      days on receipt of such claim. It will take 3-21 days for the money to
                      show in your bank account depending on your bank's policy.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Anandpushp Jobtech Private Limited assumes no responsibility and shall
                      incur no liability if it is unable to affect any Payment
                      Instruction(s) on the Payment Date owing to any one or more of the
                      following circumstances:
                    </p>
                    <ol>
                      <li>
                        <p>
                          If the Payment Instruction(s) issued by the customer is/are
                          incomplete, inaccurate, and invalid and &nbsp; delayed.
                        </p>
                      </li>
                      <li>
                        <p>
                          If the Payment Account has insufficient funds/limits to cover for
                          the amount as mentioned in the Payment Instruction(s)
                        </p>
                      </li>
                      <li>
                        <p>
                          If the funds available in the Payment Account are under any
                          encumbrance or charge.
                        </p>
                      </li>
                      <li>
                        <p>
                          If your Bank or the financier refuses or delays honoring the
                          Payment Instruction(s)
                        </p>
                      </li>
                      <li>
                        <p>
                          Circumstances beyond the control of Anandpushp Jobtech Private
                          Limited (including, but not limited to, fire, flood, natural
                          disasters, bank strikes, power failure, pandemic epidemic, systems
                          failure like computer or telephone lines breakdown due to an
                          unforeseeable cause or interference from an outside force)
                        </p>
                      </li>
                      <li>
                        <p>
                          In case the payment is not effected for any reason, the customer
                          will be intimated about the failed payment by an e-mail.
                        </p>
                      </li>
                      <li>
                        <p>
                          The payment gateway shall not be liable for refunding any amount
                          and all eligible refunds shall be made directly by Anandpushp
                          Jobtech Private Limited.
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      Customer agrees that Anandpushp Jobtech Private Limited, in its sole
                      discretion, for any or no reason, and without penalty, may suspend or
                      terminate his/her account (or any part thereof) or use of the Services
                      and remove and discard all or any part of his/her account, user
                      profile, or his/her recipient profile, at any time, for the breach of
                      “Terms of Use” by the customer and in such event, the customer shall
                      not be entitled to any refund.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
             {/* footer */}
      <footer className="footer-bg py-4 border border-success">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12 col-md-12 col-lg-12 text-center d-flex position-relative ">
                        <div className="footer-logo ">
                            <img src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg" alt="Logo" className="img-fluid rounded-circle" />
                        </div>
                        <div className="footer-links d-flex ms-5 position-absolute bottom-0 end-0">
                            <div className="left-links mt-5 ">
                                <Link to="/AboutUS" className="link">About Us</Link>
                                <Link to="/Contactus" className="link">Contact</Link>
                            </div>
                            <div className="right-links mt-5 ">
                                <Link to="/PrivacyPolicy" className="link">Privacy Policy</Link>
                                <Link to="/TermsConditions" className="link">Terms & Conditions</Link>
                                <Link to="/RefundPolicy" className="link">Refund Policy</Link>
                                <Link to="/Blog1" className="link">Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </div>
    );
}
export default RefundPolicy