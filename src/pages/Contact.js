import React from "react";
import { Helmet } from "react-helmet";

import Offlinemap from "../components/Offlinemap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>
          Contact | Zhagaram Law Firm | Advocate in Coimbatore – Civil &
          Property Law
        </title>

        <meta
          name="description"
          content="Learn about Zhagaram Law Firm – experienced advocates in Coimbatore providing trusted legal services. Location: Coimbatore, Program: E-mail: Zhagaramlawfirm@gmail.com ."
        />
      </Helmet>
      <section>
        <h6 className="guide-text ms-3 mt-4">CONTACT</h6>
        {/* contact info============ */}
        <div className="container-lg bg-light my-5 shadow">
          <div className="contact-info text-center py-5">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Location:</h5>
                  <p>
                    No 8, AGS Building, 2nd St, Opp. Collector Office,
                    Gopalapuram, Coimbatore, Tamil Nadu 641018
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Program:</h5>
                  <p>Monday – Friday: : 9 – 10pm</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>E-mail</h5>
                  <p>Zhagaramlawfirm@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Phone</h5>
                  <p>
                    <a href="tel:+919566623728" className="phone-link">
                      +(91)95666 23728{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form and text============ */}
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-sm-6 order-sm-first ">
              <div className="contact-text d-flex flex-column ">
                <h5 className="lh-base text-center pb-4">
                  Don't hesitate to contact us!
                </h5>
                <p>
                  We are here to offer you our support in all the legal issues
                  you face.{" "}
                </p>

                <p>
                  {""}
                  Legal issues can be overwhelming, but you don't have to face
                  them alone. Whether you are dealing with a property dispute,
                  require a criminal defense strategy, or simply need a Power of
                  Attorney drafted, we are here to provide the support and
                  clarity you need.
                </p>
                <p>
                  <b>
                    Reach out today to discuss your situation in a confidential
                    environment. Our team is ready to listen and act.
                  </b>
                </p>
              </div>
            </div>
            <div className="col-sm-6 ">
              <Offlinemap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
