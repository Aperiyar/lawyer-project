import React from "react";

function OfficeMap() {
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <iframe
        title="Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634.4370415808294!2d76.9697571644181!3d10.998855787014648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591c6755e4d1%3A0x4dacd12a5a9a0581!2zWmhhZ2FyYW0gTGF3IEZpcm0g4K60IOCuleCusOCuruCvjSDgrprgrp_gr43grp8g4K6u4K-I4K6v4K6u4K-N!5e1!3m2!1sen!2sin!4v1767100550445!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default OfficeMap;
