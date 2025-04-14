import React, { useState } from "react";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { FaUser } from "react-icons/fa";
import SortingTable from "components/SortingTable/SortingTable.js";

const RegularTables = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultSearchTerm, setDefaultSearchTerm] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const warningWithConfirmMessage = () => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => successDelete()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="danger"
        confirmBtnText="Yes, delete it!"
        cancelBtnText="Cancel"
        showCancel
        btnSize=""
      >
        Are you sure you want to delete this User?
      </ReactBSAlert>
    );
  };

  const successDelete = () => {
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Deleted!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="success"
        btnSize=""
      >
        Your imaginary file has been deleted.
      </ReactBSAlert>
    );
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const hideAlert = () => {
    setAlert(null);
  };

  const renderUserCell = () => (
    <div className="d-flex align-items-center">
      <FormGroup check className="pull-left">
                    <Label check>
                      <Input name="optionCheckboxes" type="checkbox" />
                      <span className="form-check-sign" /> 
                    </Label>
                  </FormGroup>
      <span 
        style={{ cursor: "pointer", color: "#007bff" }}
        onClick={() => navigate("/admin/add-user")}
      > 
        <FaUser /> admin
      </span>
    </div>
  );
  return (
    <>
      {alert}
      <div className="content">
        <Row>
          <Col className="mb-5" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h2">Users</CardTitle>
                <CardTitle tag="h4">Users are the users in the current realm.</CardTitle>
                <CardBody>
                  <div className="d-flex justify-content-between mb-2">
                    <Input
                      type="text"
                      placeholder="Default Search"
                      value={defaultSearchTerm}
                      onChange={(e) => setDefaultSearchTerm(e.target.value)}
                      className="w-25"
                    />
                    <Input
                      type="text"
                      placeholder="Search user"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-25"
                    />
                    <Button
                      color="primary"
                      className="mr-2"
                      onClick={() => navigate("src\views\Form.js")}
                    >
                      Add user
                    </Button>
                    <Button
                      className="mr-2"
                      color="info"
                      onClick={warningWithConfirmMessage}
                    >
                      Delete
                    </Button>
                    <Button color="secondary">Refresh</Button>
                  </div>
                </CardBody>
              </CardHeader>
              <CardBody>
                <SortingTable
                  thead={[
                    { text: "Username" },
                    { text: "E-Mail" },
                    { text: "Last name" },
                    { className: "text-center", text: "First name" },
                  ]}
                  tbody={[
                    {
                      data: [
                        { text: renderUserCell() },
                        { text: "-" },
                        { text: "-" },
                        { className: "text-center", text: "-" },
                      ],
                    },
                    {
                      data: [
                        { text: renderUserCell() },
                        { text: "-" },
                        { text: "-" },
                        { className: "text-center", text: "-" },
                      ],
                    },
                    {
                      data: [
                        { text: renderUserCell() },
                        { text: "-" },
                        { text: "-" },
                        { className: "text-center", text: "-" },
                      ],
                    },
                    {
                      data: [
                        { text: renderUserCell() },
                        { text: "-" },
                        { text: "-" },
                        { className: "text-center", text: "-" },
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
};

export default RegularTables;
