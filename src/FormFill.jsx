import React from "react";
import { Navbar, ButtonToolbar, Button, Form } from "react-bootstrap";
import Select from "react-select";
import { FaFileUpload } from "react-icons/fa";

const FormType1 = () => {
  return (
    <Form>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Check type="radio" label="Male" />
        <Form.Check type="radio" label="Female" />
      </Form.Group>

      <Form.Group controlId="idProof">
        <Form.Label>ID Proof</Form.Label>
        <Form.Check type="checkbox" label="Aadhar Card" />
        <Form.Check type="checkbox" label="PAN Card" />
        <Form.Check type="checkbox" label="Passport" />
      </Form.Group>

      <Form.Group controlId="dateOfbirth">
        <Form.Label>Date of birth</Form.Label>
        <Form.Control type="date" placeholder="Enter DOB" />
      </Form.Group>

      <Form.Group controlId="mobileNo">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile No." />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
class FormFill extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="justify-content-between">
          <ButtonToolbar>
            <Button variant="info" className="icon-btn">
              <FaFileUpload />
            </Button>
          </ButtonToolbar>
          <Select
            defaultValue={undefined}
            options={[]}
            formatGroupLabel={"Form Type"}
            placeholder={"Select Form Type"}
            className="select-form-type"
          />
        </Navbar>
        <div className="form-render-container">
          <FormType1 />
        </div>
      </>
    );
  }
}

export default FormFill;
