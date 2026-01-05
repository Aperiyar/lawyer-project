import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>Zhagaramlawfirm | ழகரம்சட்டமய்யம்</title>

          <meta
            name="description"
            content="Leading law firm in Coimbatore providing civil, criminal, divorce and property legal services. Book a legal consultation today."
          />
          <meta
            name="keywords"
            content="Advocate in Coimbatore, Lawyer Coimbatore, Civil Lawyer, lagaram law , Zhagaram Law Firm"
          />
        </Helmet>
        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3">Zhagaram Law Firm</div>
                <div className="text-2 fs-4">
                  ழ கரம் சட்ட மய்யம்
                  <span className="fw-bold">
                    <br></br> Coimbatore{" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  "There is no true justice where there is no right, and right
                  cannot be found where there is no truth." -{" "}
                  <span>Dr. B.R. Ambedkar.</span>
                </div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center  align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"
                      aria-label="Appointment"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Appointment
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Request an evalution"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      Request an evalution
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/lawyer">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="More Information"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      More Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Appointment"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Appointment
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Request an evalution"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Request an evalution
                </button>
              </Link>
              <Link to="/lawyer">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="More Information"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  More Information
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*TE CONFRUNTI CU O PROBLEMA========= */}

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">INTRO</h6>
                <h5 className="lh-base text-center pb-4">
                  Facing a Legal Dispute? Secure the Advocacy You Need.
                </h5>

                <p className="text-separator fw-normal ">
                  Navigating the legal system is complex, but you don't have to
                  do it alone. We specialize in resolving the matters that
                  impact you most: <br />
                  <span className="mx-auto">
                    <b>Litigation:</b> Civil rights, property disputes and
                    consumer advocacy. <br />
                    <b>Defense:</b> Aggressive representation in criminal
                    proceedings. <br />
                    <b>Planning:</b> Will drafting, trusts and power of
                    attorney. <br />
                    <b>Consulting:</b> Expert legal documentation and
                    professional advice. From the courtroom to the drafting
                    table, your rights are our priority."
                    {/*which include civil rights
                  litigation, consumer advocacy matters, criminal defence
                  proceedings, legal documentation and consulting, power of
                  attorney matters, property damage and property dispute
                  litigation, trusts and estates related proceedings, and will
  drafting.*/}
                  </span>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/law-justice.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt=" a gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES========= */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section ">
                <div className="services-overlay "></div>

                <div className="services-content container mt-3">
                  <h6 className=" guide-text">SERVICES</h6>

                  <h5 className="lh-base text-center pb-3">
                    Areas of activity
                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row ">
                    <div className="col-md-12">
                      <h5 className="color text-center pb-4">Law firm</h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/legal.png"
                          className="barou img-fluid mx-auto d-block rounded-2"
                          alt="sigla barou Bucuresti"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2 fst-italic text-start">
                        (civil rights litigation, consumer advocacy matters,
                        criminal defence proceedings, legal documentation and
                        consulting, power of attorney matters, property damage
                        and property dispute litigation, trusts and estates
                        related proceedings, and will drafting.)
                        <br />
                        <div>
                          சிவில் உரிமை தொடர்பான வழக்குகள் நுகர்வோர் தொடர்பான
                          விவகாரங்கள், குற்றவியல் பாதுகாப்பு வழக்குகள், சட்ட
                          ஆவணங்கள் மற்றும் ஆலோசனை பணிகள் பவர் ஆஃப் அட்டார்னி
                          தொடர்பான விவகாரங்கள், சொத்து சேதம் தொடர்பான வழக்குகள்,
                          சொத்து தகராறு தொடர்பான வழக்குகள் டிரஸ்ட் மற்றும்
                          வாரிசு தொடர்பான வழக்குகள்
                        </div>
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/lawyer">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            Learn more...
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT US*/}

        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4">ABOUT US</p>
                <h5 className="lh-base text-center pb-4">Who are we?</h5>

                <p className="text-separator fw-normal">
                  We will be your partner in solving all commercial, fiscal, and
                  contractual issues in a professional manner.
                  <br></br>
                  <span className="ms-4"></span>We are a young team of lawyers,
                  specialized in the financial-legal field, with a new vision of
                  approaching and solving problems. professionalism and
                  seriousness recommend us.
                  <br></br> <span className="ms-4"></span>The practice primarily
                  relates to matters concerning civil rights, consumer related
                  proceedings, criminal defence cases, legal documentation and
                  consulting, power of attorney matters, property related
                  disputes, trusts and estates proceedings, and will drafting.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/about-us.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="two persons at a desk"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/*RECOMMED*/}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text ">OUR EXPERTISE</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4">
              What do you recommend?
            </h5>
          </div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2">
              <ul className="my-list">
                <li>Extensive experience in the field</li>
                <li>High professionalism and customer-oriented approach. </li>
                <li> Active involvement in projects and their support.</li>
                <li> Direct and transparent communication with customers.</li>
                <li> Commitment to customer satisfaction.</li>
                <li>
                  {" "}
                  Providing complete solutions by collaborating with other
                  professionals.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
