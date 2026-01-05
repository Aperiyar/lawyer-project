import React from "react";
import { Helmet } from "react-helmet";

const Info = () => {
  return (
    <div className="info">
      <Helmet>
        <title>Useful Legal Information | Zhagaram Law Firm – Coimbatore</title>

        <meta
          name="description"
          content="This page provides general information on civil litigation, consumer matters, criminal proceedings, property related issues, legal documentation, wills, trusts and court procedures."
        />
      </Helmet>
      <div>
        <h6 className="guide-text ms-3 mt-4">MORE INFORMATION</h6>
        <div className="container py-5">
          <div id="accordion" className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  சிவில் வழக்குகள் – பொது தகவல் (Civil Litigation – General
                  Overview)
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    சொத்து உரிமை, ஒப்பந்தத் தகராறுகள், கடன் மீட்பு, குடும்ப
                    ஒப்பந்தங்கள் போன்றவை சிவில் வழக்குகளாக கருதப்படுகின்றன.
                    இவ்வழக்குகள் Code of Civil Procedure, 1908 விதிமுறைகளின்
                    கீழ் உரிய சிவில் நீதிமன்றங்களில் தொடரப்படுகின்றன.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  நுகர்வோர் தொடர்பான விவகாரங்கள் (Consumer– Information)
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    பொருட்கள் அல்லது சேவைகளில் குறைபாடு ஏற்பட்டால், நுகர்வோர்
                    பாதுகாப்புச் சட்டத்தின் கீழ் நுகர்வோர் ஆணையங்களில் (Consumer
                    Commission) மனு தாக்கல் செய்யப்படலாம். கோரிக்கை மதிப்பின்
                    அடிப்படையில் அதிகார வரம்பு நிர்ணயிக்கப்படுகிறது.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  வழக்குத் தொடங்கும் முறை
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    ஒரு வழக்கைத் தொடங்குவதற்கு முன் சம்பந்தப்பட்ட ஆவணங்கள்,
                    ஆதாரங்கள் மற்றும் நிகழ்வுகளின் கால வரிசை (Timeline)
                    முக்கியமானவை. வழக்கு தாக்கல் செய்யப்படுவது சம்பந்தப்பட்ட
                    நீதிமன்றத்தின் அதிகார வரம்பு மற்றும் சட்ட விதிமுறைகளின்
                    அடிப்படையில் நடைபெறும்.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  ஆவணங்களின் முக்கியத்துவம்
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    சொத்து ஆவணங்கள், ஒப்பந்தங்கள், ரசீதுகள், வங்கி விவரங்கள்
                    மற்றும் பிற சட்ட ஆவணங்கள் வழக்குகளில் முக்கிய ஆதாரங்களாகக்
                    கருதப்படுகின்றன. அவை முறையாக பாதுகாக்கப்படுதல் அவசியம்
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  வழக்கு நிலவரம்
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    வழக்கின் நிலவரத்தை அறிந்து கொள்வதற்காக, சம்பந்தப்பட்ட
                    நீதிமன்ற இணையதளங்களில் Case Status பார்க்கும் வசதி உள்ளது.
                    இது வழக்கின் முன்னேற்றத்தைப் புரிந்துகொள்ள உதவும்.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  சொத்து சேதம் மற்றும் சொத்து தகராறுகள்
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    சொத்து சேதம், எல்லைத் தகராறு, உரிமைச் சிக்கல் போன்றவை சிவில்
                    நீதிமன்றங்களில் தீர்வு காணப்படுகின்றன. சம்பந்தப்பட்ட
                    ஆதாரங்கள் மற்றும் ஆவணங்கள் முக்கிய பங்கு வகிக்கின்றன.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  கால வரம்பு (Limitation Period)
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    பல சட்ட நடவடிக்கைகள் குறிப்பிட்ட கால வரம்புக்குள் தொடங்கப்பட
                    வேண்டும். அந்த காலம் கடந்தால், வழக்கு தொடர இயலாமை ஏற்படலாம்.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  வழக்கு நிலவரம்
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    வழக்கின் நிலவரத்தை அறிந்து கொள்வதற்காக, சம்பந்தப்பட்ட
                    நீதிமன்ற இணையதளங்களில் Case Status பார்க்கும் வசதி உள்ளது.
                    இது வழக்கின் முன்னேற்றத்தைப் புரிந்துகொள்ள உதவும்.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  சட்ட ஆவணங்கள்
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    ஒப்பந்தங்கள், ஆபிதேவிட், பவர் ஆஃப் அட்டார்னி, வில் போன்ற
                    சட்ட ஆவணங்கள் சம்பந்தப்பட்ட சட்ட விதிமுறைகளின் படி
                    தயாரிக்கப்பட வேண்டும். சில ஆவணங்களுக்கு பதிவு (Registration)
                    அவசியமாக இருக்கலாம்.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
