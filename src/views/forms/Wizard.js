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
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// wizard steps
import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";
import Step4 from "./WizardSteps/Step4.js";
import Step5 from "./WizardSteps/Step5.js";
import Step6 from "./WizardSteps/Step6.js";
import Step7 from "./WizardSteps/Step7.js";
import Step8 from "./WizardSteps/Step8.js";

var steps = [
  {
    stepName: "Details",
    stepIcon: "tim-icons icon-single-02",
    component: Step1,
  },
  {
    stepName: "Credentials",
    stepIcon: "tim-icons icon-settings-gear-63",
    component: Step2,
  },
  {
    stepName: "Role Mapping",
    stepIcon: "tim-icons icon-delivery-fast",
    component: Step3,
  },
  {
    stepName: "Groups",
    stepIcon: "tim-icons icon-delivery-fast",
    component: Step4,
  },
  {
    stepName: "Consest",
    stepIcon: "tim-icons icon-delivery-fast",
    component: Step5,
  },
  {
    stepName: "Authorization",
    stepIcon: "tim-icons icon-delivery-fast",
    component: Step6,
  },
  {
    stepName: "Session",
    stepIcon: "tim-icons icon-delivery-fast",
    component: Step7,
  },
  {
    stepName: "Events",
    stepIcon: "tim-icons icon-delivery-fast",
    component: Step8,
  },
];

const Wizard = () => {
  return (
    <>
      <div className="content">
        <Col className="mr-auto ml-auto" md="10">
          <ReactWizard
            steps={steps}
            navSteps
            title="-Users Name-"
            headerTextCenter
            finishButtonClasses="btn-wd btn-info"
            nextButtonClasses="btn-wd btn-info"
            previousButtonClasses="btn-wd"
            progressbar
            color="blue"
          />
        </Col>
      </div>
    </>
  );
};

export default Wizard;
