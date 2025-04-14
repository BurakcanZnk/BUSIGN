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
import { Row, Col, Button} from "reactstrap";


const Step2 = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
  }));
  return (
    <>
      <Row className="justify-content-center">

       <h2>NO GROUPS</h2>
      
       </Row>
       <Row className="justify-content-center">
   
       <h4>You haven't added this user to any groups. Join a group to get started.</h4>
     
       </Row>
       <Row className="justify-content-center">
     
       <Button color="primary" >
                Create
       </Button>
       
       </Row>       
      
      
    </>
  );
});

export default Step2;
