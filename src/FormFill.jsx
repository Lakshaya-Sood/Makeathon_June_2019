import React from "react";
import { Navbar, ButtonToolbar, Button, Form } from "react-bootstrap";
import Select from "react-select";
import { FaFileUpload } from "react-icons/fa";

const Gender = () => {
  return (
    <Form.Group controlId="gender">
      <Form.Label>Gender</Form.Label>
      <Form.Check type="radio" label="Male" />
      <Form.Check type="radio" label="Female" />
    </Form.Group>
  )
}

const IDProof = () => {
  return (
    <Form.Group controlId="idProof">
      <Form.Label>ID Proof</Form.Label>
      <Form.Check type="checkbox" label="Aadhar Card" />
      <Form.Check type="checkbox" label="PAN Card" />
      <Form.Check type="checkbox" label="Passport" />
    </Form.Group>
  )
}

const Mobile = () => {
  return (
    <Form.Group controlId="mobileNo">
      <Form.Label>Mobile No.</Form.Label>
      <Form.Control type="number" placeholder="Enter Mobile No." />
    </Form.Group>
  )
}

const Dob = () => {
  return (
    <Form.Group controlId="dateOfbirth">
      <Form.Label>Date of birth</Form.Label>
      <Form.Control type="date" placeholder="Enter DOB" />
    </Form.Group>
  )
}

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

      <Gender/>
      <IDProof/>
      <Dob/>
      <Mobile/>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const FormType2 = () => {
  return (
    <Form>
    <Form.Group controlId="fullName">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="Enter full name" />
    </Form.Group>

    <Dob/>

    <Form.Group controlId="address">
      <Form.Label>Employee Address</Form.Label>
      <Form.Control type="text" placeholder="Enter address" />
    </Form.Group>

    <Gender/>
    <Mobile/>
    <IDProof/>

    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
  );
}

const options = [
  { value: 'type1', label: 'Type 1' },
  { value: 'type2', label: 'Type 2' }
];

class FormFill extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedForm: 'type1'
    }
  }
  render() {
    let form = this.state.selectedForm === 'type1' ? <FormType1 /> : <FormType2 />
    return (
      <>
        <Navbar bg="dark" variant="dark" className="justify-content-between">
          <ButtonToolbar>
            <Button variant="info" className="icon-btn">
              <FaFileUpload />
            </Button>
          </ButtonToolbar>
          <Select
          onChange={this.handleChange}
          options={options}
          formatGroupLabel={"Form Type"}
          placeholder={"Select Form Type"}
          className="select-form-type"
          />
        </Navbar>
        <div className="form-render-container">
          {form}
        </div>
      </>
    );
  }

  handleChange = selectedOption => {
    this.setState({
      selectedForm: selectedOption.value
    })
  }
}

export default FormFill;
