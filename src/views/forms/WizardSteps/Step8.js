import React from "react";

// reactstrap components
import { Row, Col, Button, Card, CardBody, CardTitle, CardText } from "reactstrap";

// core components

const Step2 = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
  }));

  const userEvents = [];
  const adminEvents = []; 
  return (
    <>
      <Row className="justify-content-center">
        <h2>User and Admin Events</h2>
      </Row>

      <Row className="justify-content-center">
        <Col md="5">
          <Card>
            <CardBody>
              <CardTitle tag="h4">User Events</CardTitle>
              {userEvents.length === 0 ? (
                <CardText>No user events available.</CardText>
              ) : (
                <ul>
                  {userEvents.map((event, index) => (
                    <li key={index}>{event}</li> 
                  ))}
                </ul>
              )}
            </CardBody>
          </Card>
        </Col>

        <Col md="5">
          <Card>
            <CardBody>
              <CardTitle tag="h4">Admin Events</CardTitle>
              {adminEvents.length === 0 ? (
                <CardText>No admin events available.</CardText>
              ) : (
                <ul>
                  {adminEvents.map((event, index) => (
                    <li key={index}>{event}</li> 
                  ))}
                </ul>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Button color="primary">
          Refresh
        </Button>
      </Row>
    </>
  );
});

export default Step2;
