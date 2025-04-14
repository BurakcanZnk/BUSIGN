import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const ValidationForms = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerEmailState, setRegisterEmailState] = useState("");
  const [registerPasswordState, setRegisterPasswordState] = useState("");
  const [registerConfirmPasswordState, setRegisterConfirmPasswordState] = useState("");

  const verifyEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const verifyLength = (value, length) => value.length >= length;

  const registerClick = () => {
    if (!verifyEmail(registerEmail)) setRegisterEmailState("has-danger");
    if (!verifyLength(registerPassword, 6)) setRegisterPasswordState("has-danger");
    if (registerPassword !== registerConfirmPassword) setRegisterConfirmPasswordState("has-danger");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Register Form</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <label>Email</label>
                <Input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className={registerEmailState}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <label>Password</label>
                <Input
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className={registerPasswordState}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <label>Confirm Password</label>
                <Input
                  type="password"
                  value={registerConfirmPassword}
                  onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                  className={registerConfirmPasswordState}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button color="primary" onClick={registerClick}>
            Register
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default ValidationForms;
