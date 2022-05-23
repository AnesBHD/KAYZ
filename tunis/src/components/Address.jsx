import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Adresse</span>1 Place Bartehlemy Dorez, Lille 59000. France
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mon adresse mail</span>{" "}
        <a href="mailto:steve@mail.com">kayz@700.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">M'appeler</span>{" "}
        <a href="Tel: +216 21 184 010">+33 7 07 07 07 07</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
