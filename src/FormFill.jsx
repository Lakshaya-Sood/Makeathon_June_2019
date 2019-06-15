import React from "react";
import { Navbar, ButtonToolbar, Button, Form } from "react-bootstrap";
import Select from "react-select";
import { FaFileUpload } from "react-icons/fa";
import axios from "axios";


const localhost = "http://localhost:8080";
const fluskServer = "http://1d85b46b.ngrok.io";

const Gender = (props) => {
  console.log("In Gender");
  console.log(props);
  return (
    <Form.Group controlId="gender">
      <Form.Label>Gender</Form.Label>
      <Form.Check
        type="radio"
        label="Male"
        name="gender"
        id="gender"
        onChange={handleChange}
        onFocus={(event) => handleOnFocus(event, props.formType)} // <--- Open the picker on focus
        onBlur={handleOnBlur} />
      <Form.Check type="radio" label="Female" name="gender"
        id="gender"
        onChange={handleChange}
        onFocus={(event) => handleOnFocus(event, props.formType)} // <--- Open the picker on focus
        onBlur={handleOnBlur} />
    </Form.Group>
  )
}

const IDProof = (props) => {
  return (
    <Form.Group controlId="idProof">
      <Form.Label>ID Proof</Form.Label>
      <Form.Check type="checkbox" label="Aadhar Card"
        id="id_proof"
        onChange={handleChange}
        onFocus={(event) => handleOnFocus(event, props.formType)} // <--- Open the picker on focus
        onBlur={handleOnBlur} />
      <Form.Check type="checkbox" label="PAN Card"
        id="id_proof"
        onChange={handleChange}
        onFocus={(event) => handleOnFocus(event, props.formType)} // <--- Open the picker on focus
        onBlur={handleOnBlur} />
      <Form.Check type="checkbox" label="Passport"
        id="id_proof"
        onChange={handleChange}
        onFocus={(event) => handleOnFocus(event, props.formType)} // <--- Open the picker on focus
        onBlur={handleOnBlur} />
    </Form.Group>
  )
}

const Mobile = (props) => {
  return (
    <Form.Group controlId="mobileNo">
      <Form.Label>Mobile No.</Form.Label>
      <Form.Control type="number" placeholder="Enter Mobile No."
        id="mob_no"
        onChange={handleChange}
        onFocus={(event) => handleOnFocus(event, props.formType)} // <--- Open the picker on focus
        onBlur={handleOnBlur} />
    </Form.Group>
  )
}

const Dob = (props) => {
  return (
    <Form.Group controlId="dateOfbirth">
      <Form.Label>Date of birth</Form.Label>
      <Form.Control type="date" placeholder="Enter DOB"
        id="dob_no"
        onChange={handleChange}
        onFocus={(event) => handleOnFocus(event, props.formType)} // <--- Open the picker on focus
        onBlur={handleOnBlur} />
    </Form.Group>
  )
}

const handleOnBlur = () => {
  //console.log("In  handleOnBlur");
}

const handleOnFocus = (event, formType) => {


  let apiCall = `${fluskServer}/data?form_name=Form Type 1&field_name=${event.target.id}`;
  //console.log(apiCall);
  //let apiCall=`${localhost}/${formType}/${event.target.id}`;
  axios.get(apiCall,null, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    })
    .then(data => {
      console.log('data:', data);
      let formData = data['data'];
      console.log(formData);
      console.log(formData.data);
    })
  //console.log(apiCall);
}

const handleChange = (event, formType) => {
  // let apiCall=`/${formType}/${event.target.name}`;
  // console.log(apiCall);
  // console.log("value entered");
}

const FormType1 = (props) => {
  const formType = props.formType;
  console.log(formType);
  return (
    <Form>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" name="first_name" id="first_name"
          onChange={handleChange}
          onFocus={(event) => handleOnFocus(event, formType)} // <--- Open the picker on focus
          onBlur={handleOnBlur} />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name"
          name="last_name"
          id="last_name"
          onChange={handleChange}
          onFocus={(event) => handleOnFocus(event, formType)} // <--- Open the picker on focus
          onBlur={handleOnBlur} />
      </Form.Group>

      <Gender formType={props.formType} />
      <IDProof formType={props.formType} />
      <Dob formType={props.formType} />
      <Mobile formType={props.formType} />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const FormType2 = (props) => {
  console.log("In FormType2");
  console.log(props);
  return (
    <Form>
      <Form.Group controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" onChange={handleChange}
          id="full_name"
          onFocus={(event) => handleOnFocus(event, props.formType)} // <--- Open the picker on focus
          onBlur={handleOnBlur} />
      </Form.Group>

      <Dob formType={props.formType} />

      <Form.Group controlId="address">
        <Form.Label>Employee Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" onChange={handleChange}
          id="address"
          onFocus={(event) => handleOnFocus(event, props.formType)} // <--- Open the picker on focus
          onBlur={handleOnBlur} />
      </Form.Group>

      <Gender formType={props.formType} />
      <Mobile formType={props.formType} />
      <IDProof formType={props.formType} />

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


    let form = this.state.selectedForm === 'type1' ? <FormType1 formType={this.state.selectedForm} /> : <FormType2 formType={this.state.selectedForm} />
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
    console.log(selectedOption);
    this.setState({
      selectedForm: selectedOption.value
    })
  }
}

export default FormFill;
