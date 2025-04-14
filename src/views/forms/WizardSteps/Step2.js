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
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import SortingTable from "components/SortingTable/SortingTable.js";

const Step2 = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
  }));
  return (
    <>
        <div className="content">
        <Row>
          <Col className="mb-5" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Admin</CardTitle>
              </CardHeader>
              <CardBody>
                <SortingTable
                  thead={[
                    { text: "Type" },
                    { text: "User label" },
                    { text: "Creadted at" },
                    { className: "text-center", text: "Data" },
                    
                  ]}
                  tbody={[
                    {
                      data: [
                        { text: "Password" },
                        { text: "" },
                        { text: "Calender" },
                        { className: "text-center", text: "$Show Data" },
                      ],
                    },
                   
                  ]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
});

export default Step2;
