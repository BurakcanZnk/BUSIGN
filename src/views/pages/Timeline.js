import React from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, CardTitle, Label, FormGroup, Form, Input, CustomInput, Row, Col } from "reactstrap";


const RangeValidationForm = () => {
  const [dropdownValue, setDropdownValue] = React.useState("");
  const [dropdownState, setDropdownState] = React.useState("");
  const [minLength, setMinLength] = React.useState("");
  const [maxLength, setMaxLength] = React.useState("");
  const [range, setRange] = React.useState("");
  const [min, setMin] = React.useState("");
  const [max, setMax] = React.useState("");

  const [minLengthState, setMinLengthState] = React.useState("");
  const [maxLengthState, setMaxLengthState] = React.useState("");
  const [rangeState, setRangeState] = React.useState("");
  const [minState, setMinState] = React.useState("");
  const [maxState, setMaxState] = React.useState("");

  const verifyNumber = (value) => /^[0-9]+$/.test(value);

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setDropdownValue(value);
    setDropdownState(value ? "has-success" : "has-danger");
  };

  const handleGroupSelection = () => {

    alert("Group selection page will open.");
  };

  const change = (event, stateName, type, minVal, maxVal) => {
    const value = event.target.value;

    const setState = {
      minLength: setMinLength,
      maxLength: setMaxLength,
      range: setRange,
      min: setMin,
      max: setMax,
    }[stateName];

    const setValidationState = {
      minLength: setMinLengthState,
      maxLength: setMaxLengthState,
      range: setRangeState,
      min: setMinState,
      max: setMaxState,
    }[stateName];

    setState(value);

    switch (type) {
      case "length":
        setValidationState(value.length >= minVal ? "has-success" : "has-danger");
        break;
      case "max-length":
        setValidationState(value.length <= minVal ? "has-success" : "has-danger");
        break;
      case "range":
        setValidationState(
          verifyNumber(value) && +value >= minVal && +value <= maxVal
            ? "has-success"
            : "has-danger"
        );
        break;
      case "min-value":
        setValidationState(verifyNumber(value) && +value >= minVal ? "has-success" : "has-danger");
        break;
      case "max-value":
        setValidationState(verifyNumber(value) && +value <= minVal ? "has-success" : "has-danger");
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    if (dropdownValue === "") setDropdownState("has-danger");
    if (minLengthState === "") setMinLengthState("has-danger");
    if (maxLengthState === "") setMaxLengthState("has-danger");
    if (rangeState === "") setRangeState("has-danger");
    if (minState === "") setMinState("has-danger");
    if (maxState === "") setMaxState("has-danger");
  };

  return (
    <div className="content">
      <Col md="12">
        <Form className="form-horizontal" id="RangeValidation">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">Create User</CardTitle>
            </CardHeader>
            <CardBody>
           
              <Row>
                <Label sm="2">Required user actions</Label>
                <Col sm="7">
                  <FormGroup className={dropdownState}>
                    <Input type="select" value={dropdownValue} onChange={handleDropdownChange}>
                      <option value="">Select Action</option>
                      <option value="uzun">Long Action</option>
                      <option value="kısa">Short Action</option>
                      <option value="orta">Medium Action</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              
              <Row className="mb-3">
                <Label sm="3" className="font-weight-bold">E-mail Verified</Label>
                <Col sm="8" lg="7" className="d-flex align-items-center">
                  <span className="mr-2">Off</span>
                  <CustomInput
                    type="switch"
                    id="switch-1"
                    defaultChecked
                    className="mt-n1"
                    label=""
                  />
                  <span className="ml-2">On</span>
                </Col>
              </Row>

            
              <h3>General</h3>
              <Row>
                <Label sm="2">Username*</Label>
                <Col sm="7">
                  <FormGroup className={minLengthState}>
                    <Input
                      name="min_length"
                      type="text"
                      onChange={(e) => change(e, "minLength", "length", 5)}
                    />
                    {minLengthState === "has-danger" && (
                      <label className="error">Please enter at least 5 characters.</label>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Label sm="2">E-mail</Label>
                <Col sm="7">
                  <FormGroup className={maxLengthState}>
                    <Input
                      name="max_length"
                      type="text"
                      onChange={(e) => change(e, "maxLength", "max-length", 5)}
                    />
                    {maxLengthState === "has-danger" && (
                      <label className="error">Please enter 5 or less characters.</label>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Label sm="2">First Name</Label>
                <Col sm="7">
                  <FormGroup className={rangeState}>
                    <Input
                      name="range"
                      type="text"
                      onChange={(e) => change(e, "range", "range", 6, 10)}
                    />
                    {rangeState === "has-danger" && (
                      <label className="error">Please enter a value between 6 and 10.</label>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Label sm="2">Last Name</Label>
                <Col sm="7">
                  <FormGroup className={minState}>
                    <Input
                      name="min"
                      type="text"
                      onChange={(e) => change(e, "min", "min-value", 6)}
                    />
                    {minState === "has-danger" && (
                      <label className="error">
                        Please enter a value greater than or equal to 6.
                      </label>
                    )}
                  </FormGroup>
                </Col>
              </Row>

           
              <Row>
                <Label sm="2">Join Groups</Label>
                <Col sm="7">
                 
                  <Button color="primary" onClick={handleGroupSelection}>
                    Select Groups
                  </Button>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={validateForm}>
                Create
              </Button>
               <Button color="danger">
                <i className="tim-icons icon-simple-remove" /> Cancel
               </Button>
            </CardFooter>
          </Card>
        </Form>
      </Col>
    </div>
  );
};

export default RangeValidationForm;
