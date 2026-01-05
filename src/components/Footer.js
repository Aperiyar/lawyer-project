import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  // faAngleUp,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center py-4">
            {/* Logo Section */}
            <div className="col-md-4 ps-4 mx-auto text-center">
              <span className="">
                <img
                  src="/assets/LOGO2.png"
                  className="img-fluid logo-image me-1"
                  alt="scales of justice logo"
                  width="50"
                  height="50"
                />
                <img
                  src="/assets/component.png"
                  className="img-fluid px-4 logo-text"
                  alt="ZhagaramLawFirm"
                  width="150"
                  height="100"
                />
              </span>
              <p className="content pt-3 px-3">
                Our law firm can guide you through your legal and financial
                challenges. We are dedicated to protecting your interests and
                providing you with personalized solutions.
              </p>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 text-center">
              <h6 className="pb-2">Contact</h6>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-icon"
                    title="av_alinamarin@yahoo.com"
                  />
                  <span className="fw-light px-2">
                    ZhagaramLawFirm@gmail.com
                  </span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-icon"
                    title="+(91)9566623728"
                  />
                  <span className="px-2 fw-light">+(91)9566623728</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-top">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                    title="Coimbatore"
                  />
                  <span className="px-2 fw-light">
                    No 8, AGS Building, 2nd St, Opp. Collector Office,
                    Gopalapuram, Coimbatore, Tamil Nadu 641018
                  </span>
                </span>
              </div>
            </div>

            {/* Program section */}
            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div>
                <h6 className="pb-2">Program</h6>
                <p className="fw-light">
                  Monday – friday: 9AM – 8PM <br />{" "}
                </p>
                <a href="https://share.google/9QNnc8HRNavYlqFMd" className="">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll up */}
        {/* <div>
          <a
            href="#top"
            aria-label="Navigheaza in partea de sus"
            className="scroll-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FontAwesomeIcon icon={faAngleUp} className="up-icon" size="2x" />
          </a>
        </div> */}
        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="+919566623728"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="assets/LOGO2.png"
            headerTxtColor="white"
            headerBgColor="#02182b"
            headerTitle=" ழ கரம் சட்ட மய்யம்"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
              <>
                Hello,
                <br />
                <br /> How can we help you?
              </>
            }
            footerBgColor="#999"
            btnBgColor="#c2b697"
            btnTxtColor="black"
          />
        </div>
        {/* Copyright */}
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">©2026 Zhagaram Law Firm</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
