import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
const Lawyer = () => {
  return (
    <>
      <div className="avocatura">
        <Helmet>
          <title>
            Zhagaram Law Firm | Advocate in Coimbatore – Civil, Criminal &
            Property Law
          </title>

          <meta
            name="description"
            content="Zhagaram Law Firm is a legal practice based in Coimbatore providing general information on civil law, criminal defence, consumer matters, property disputes, trusts, estates and legal documentation."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">LAWYER SERVICES</h6>
          <div className=" pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">Full legal services</h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              We offer legal advice and specialized assistance in a number of
              practice areas
            </h6>
          </div>
          <div className="row g-5 px-5 pt-4 ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 ">
                <div class="civil card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2"> CIVIL</h6>
                  <p className="card-text mx-1">
                    Legal consulting services, assistance and representation
                    before the courts, drafting subpoenas. We help you quickly
                    resolve your legal problem{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">CRIMINAL LAW</h6>
                  <p className="card-text mx-1">
                    Legal assistance and representation before criminal
                    prosecution bodies and before courts, drafting requests and
                    complaints against criminal prosecution measures and acts,
                    drafting rehabilitation applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="executare card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">FORCEFUL EXECUTION</h6>
                  <p className="card-text mx-1">
                    In the matter of forced execution, the services offered are
                    regardless of your capacity in this procedure – debtor or
                    creditor. Passivity can have particularly serious
                    consequences in this matter, both for the creditor and the
                    debtor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">
                    FAMILY LAW - DIVORCE AND PARTITION
                  </h6>
                  <p className="card-text mx-1">
                    Legal assistance and representation services in divorce,
                    partition, exercise of parental authority, alimony, minor
                    visitation program.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">LABOR LAW</h6>
                  <p className="card-text mx-1">
                    We offer professional legal services, embodied in drafting
                    the appeal against the dismissal decision, against the
                    disciplinary sanction decision, obliging the employer to pay
                    salary rights, and drafting legal opinions in labor law.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">
                    COMMERCIAL AND CORPORATE LAW
                  </h6>
                  <p className="card-text mx-1">
                    Establishment of commercial companies at the Trade Register,
                    change of registered office, establishment/deletion of a
                    work point, drafting of articles of association, decisions
                    of the general meeting of associations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <p className="more-services py-4">
              Other areas of activity in which we offer you consultancy,
              assistance and representation before courts or other state
              institutions: RECOVERY OF DEBT, PENSIONS AND OTHER SOCIAL
              INSURANCE RIGHTS, OWNERS' ASSOCIATIONS, OFFENCE COMPLAINTS, FINES,
              CAR ACCIDENT COMPENSATION, drafting of applications as well as any
              other documents specific to the activity.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lawyer;
