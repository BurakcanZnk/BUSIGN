import React from "react";

import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button,
  Label,
  FormGroup,
  CustomInput,
  Form,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle
} from "reactstrap";

const Step1 = React.forwardRef((props, ref) => {
  // State definitions
  const [firstname, setfirstname] = React.useState("");
  const [firstnameState, setfirstnameState] = React.useState("");
  const [firstnameFocus, setfirstnameFocus] = React.useState(false);

  const [lastname, setlastname] = React.useState("");
  const [lastnameState, setlastnameState] = React.useState("");
  const [lastnameFocus, setlastnameFocus] = React.useState(false);

  const [email, setemail] = React.useState("");
  const [emailState, setemailState] = React.useState("");
  const [emailFocus, setemailFocus] = React.useState(false);

  const [phone, setphone] = React.useState("");
  const [phoneState, setphoneState] = React.useState("");
  const [phoneFocus, setphoneFocus] = React.useState(false);

  const [minLengthState, setMinLengthState] = React.useState("");
  const [maxLengthState, setMaxLengthState] = React.useState("");
  const [rangeState, setRangeState] = React.useState("");
  const [minState, setMinState] = React.useState("");

  const [dropdownValue, setDropdownValue] = React.useState("");
  const [dropdownState, setDropdownState] = React.useState("");
  const handleGroupSelection = () => {

    alert("Group selection page will open.");
  };
  const verifyEmail = (value) => {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRex.test(value);
  };

  // Length validation
  const verifyLength = (value, length) => value.length >= length;

  // Number validation
  const verifyNumber = (value) => /^[0-9]+$/.test(value);

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
    if (e.target.value === "") {
      setDropdownState("has-danger");
    } else {
      setDropdownState("has-success");
    }
  };

  const change = (event, stateName, type, stateNameEqualTo) => {
    switch (type) {
      case "email":
        if (verifyEmail(event.target.value)) {
          eval(`set${stateName}State`)("has-success");
        } else {
          eval(`set${stateName}State`)("has-danger");
        }
        break;
      case "length":
        if (verifyLength(event.target.value, stateNameEqualTo)) {
          eval(`set${stateName}State`)("has-success");
        } else {
          eval(`set${stateName}State`)("has-danger");
        }
        break;
      case "number":
        if (verifyNumber(event.target.value)) {
          eval(`set${stateName}State`)("has-success");
        } else {
          eval(`set${stateName}State`)("has-danger");
        }
        break;
      default:
        break;
    }
    eval(`set${stateName}`)(event.target.value);
  };

  const isValidated = () => {
    if (
      firstnameState === "has-success" &&
      lastnameState === "has-success" &&
      emailState === "has-success" &&
      phoneState === "has-success" &&
      dropdownState === "has-success"
    ) {
      return true;
    } else {
      if (firstnameState !== "has-success") {
        setfirstnameState("has-danger");
      }
      if (lastnameState !== "has-success") {
        setlastnameState("has-danger");
      }
      if (emailState !== "has-success") {
        setemailState("has-danger");
      }
      if (phoneState !== "has-success") {
        setphoneState("has-danger");
      }
      if (dropdownState !== "has-success") {
        setDropdownState("has-danger");
      }
      return false;
    }
  };

  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
  }));

  return (
    <div className="content">
      <Col md="12">
        <Form className="form-horizontal" id="RangeValidation">
          <Card>
            <CardBody>
            <Row>
                <Label sm="2">ID*</Label>
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
                <Label sm="2">Created at*</Label>
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
                <Label sm="2">Required user actions</Label>
                <Col sm="7">
                  <FormGroup className={dropdownState}>
                    <Input
                      type="select"
                      value={dropdownValue}
                      onChange={handleDropdownChange}
                    >
                      <option value="">Select Action</option>
                      <option value="uzun">Long Action</option>
                      <option value="kısa">Short Action</option>
                      <option value="orta">Medium Action</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row className="mb-3">
                <Label sm="3" className="font-weight-bold">
                  E-mail Verified
                </Label>
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
                      onChange={(e) => change(e, "maxLength", "length", 5)}
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
                      onChange={(e) => change(e, "range", "length", 6)}
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
                      onChange={(e) => change(e, "min", "length", 6)}
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
                            <Button color="info">
                             <i className="tim-icons" /> Save
                            </Button>
                            <Button color="warning">
                             <i className="tim-icons" />Revert
                             </Button>
                        </CardFooter>
          </Card>
        </Form>
      </Col>
    </div>
  );
});

export default Step1;
