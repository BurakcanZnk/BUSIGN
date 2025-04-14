/*!

=========================================================
* Black Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.js";

const Step2 = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
  }));
  return (
    <>
      <Row className="justify-content-center">
      
       <h2>NO CONSEST</h2>
      
       </Row>
       <Row >
       
       <h4>The consents will only be recorded when users try to access a client that is configured to require consent.
         In that case, users will get a consent page which asks them to grant access to the client.</h4>
      
       </Row>
    </>
  );
});

export default Step2;
