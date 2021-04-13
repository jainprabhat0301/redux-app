import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FormValidation from "../../Comman/FormValidation";
import { nanoid } from 'nanoid'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {updateEmpFromList } from "./action";
import { Col, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
} from 'mdbreact'

export default function UpdateEmp({empData}) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [fields, setfields] = useState(empData.empData)
    const [errors, seterrors] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()
    const handleChange = (e) => {
        if (e.target.name == 'mobileno') {
            if (e.target.value > 0 || e.target.value == '') {
                fields[e.target.name] = e.target.value
                setfields({ ...fields })
            }
        } else {
            fields[e.target.name] = e.target.value
            setfields({ ...fields })
        }
    }

    const handleSubmitForm = () => {
   
        const validateForm = FormValidation(fields, seterrors)
        if (validateForm) {
            const updated_emp = {
                // id: new Date().getTime()-1615878511645,
                id: fields['id'],//different from add employee
                firstname: fields['firstname'],
                lastname: fields['lastname'],
                email: fields['email'],
                department: fields['department'],
                mobileno: fields['mobileno'],
            }
            dispatch(updateEmpFromList(updated_emp))
            handleClose()
            //history.push('/')
        }
       
    }


    const handleClear = () => {
       setfields({})
       seterrors({})
    }

    const handleCancel = () => {
        handleClose()

    }

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
            Update
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <FormGroup>
                            <Label for="examplefirstname">First Name</Label>
                            <Input
                                type="text"
                                name="firstname"
                                id="examplefirstname"
                                placeholder=""
                                value={fields.firstname}
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                            />
                            {/* value={this.state.firstname} required onChange={this.changeFirstNameHandler} */}
                        </FormGroup>
                        <div className="errorMsg">{errors.firstname}</div>

                        <FormGroup>
                            <Label for="examplelastname">Last Name</Label>
                            <Input
                                type="text"
                                name="lastname"
                                id="examplelastname"
                                placeholder=""
                                value={fields.lastname}
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                            />
                        </FormGroup>
                        <div className="errorMsg">{errors.lastname}</div>

                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder=""
                                value={fields.email}
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                            />
                        </FormGroup>
                        <div className="errorMsg">{errors.email}</div>

                        <FormGroup>
                            <Label for="examplePassword">Department</Label>
                            <Input
                                type="text"
                                name="department"
                                id="exampleDepartment"
                                placeholder=""
                                value={fields.department}
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                            />
                        </FormGroup>
                        <div className="errorMsg">{errors.department}</div>

                        <FormGroup>
                            <Label for="examplePassword">Mobile No.</Label>
                            <Input
                                type="text"
                                name="mobileno"
                                id="exampleMobileno"
                                placeholder=""
                                value={fields.mobileno}
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                            />
                        </FormGroup>
                        <div className="errorMsg">{errors.mobileno}</div>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleSubmitForm}>
                        Save
          </Button>
                </Modal.Footer>
            </Modal>

            
        </>
    )
}




// import React, { useState } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom'
// import { Col, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap'
// import { updateEmpFromList } from "./action";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import FormValidation from "../../Comman/FormValidation";


// import {
//     MDBBtn,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCol,
// } from 'mdbreact'
// export default function UpdateEmp(props) {
//     const location = useLocation()
//     console.log("location", location.state.empData);
//     const empData = location.state.empData
//     const [fields, setfields] = useState(empData)
//     const [errors, seterrors] = useState({})
//     const dispatch = useDispatch()
//     const history = useHistory()

//     //console.log("create Employee Props",props);
//     const handleChange = (e) => {
//         //  console.log(e.target.value)
//         if (e.target.name == 'mobileno') {
//             if (e.target.value > 0 || e.target.value == '') {
//                 fields[e.target.name] = e.target.value
//                 setfields({ ...fields })
//             }
//         } else {
//             fields[e.target.name] = e.target.value
//             setfields({ ...fields })
//         }
//     }

//     const handleSubmitForm = () => {
//         const validateForm = FormValidation(fields, seterrors)
//         if (validateForm) {
//             const updated_emp = {
//                 id: fields['id'],
//                 firstname: fields['firstname'],
//                 lastname: fields['lastname'],
//                 email: fields['email'],
//                 department: fields['department'],
//                 mobileno: fields['mobileno'],
//             }
//             dispatch(updateEmpFromList(updated_emp))
//             history.push('/')
//         }
//     }

 
//     const handleCancel = () => {
//         history.push('/')
//     }

//     return (
//         <>
//             <MDBCol className="p-d-flex p-jc-center">
//                 <MDBCard
//                     style={{
//                         width: '35rem',
//                         marginBottom: '2em',
//                         marginTop: '5em',
//                     }}
//                 >
//                     <MDBCardBody>
//                         <Form>
//                             <p
//                                 className="p-mb-3 p-text-center p-text-bold"
//                                 style={{ fontSize: '50px' }}
//                             >
//                                 Update Employee
//                             </p>
//                             <FormGroup>
//                                 <Label for="examplefirstname">First Name</Label>
//                                 <Input
//                                     type="text"
//                                     name="firstname"
//                                     id="examplefirstname"
//                                     placeholder=""
//                                     value={fields.firstname}
//                                     onChange={(e) => {
//                                         handleChange(e)
//                                     }}
//                                 />
//                                 {/* value={this.state.firstname} required onChange={this.changeFirstNameHandler} */}
//                             </FormGroup>
//                             <div className="errorMsg">{errors.firstname}</div>

//                             <FormGroup>
//                                 <Label for="examplelastname">Last Name</Label>
//                                 <Input
//                                     type="text"
//                                     name="lastname"
//                                     id="examplelastname"
//                                     placeholder=""
//                                     value={fields.lastname}
//                                     onChange={(e) => {
//                                         handleChange(e)
//                                     }}
//                                 />
//                             </FormGroup>
//                             <div className="errorMsg">{errors.lastname}</div>

//                             <FormGroup>
//                                 <Label for="exampleEmail">Email</Label>
//                                 <Input
//                                     type="email"
//                                     name="email"
//                                     id="exampleEmail"
//                                     placeholder=""
//                                     value={fields.email}
//                                     onChange={(e) => {
//                                         handleChange(e)
//                                     }}
//                                 />
//                             </FormGroup>
//                             <div className="errorMsg">{errors.email}</div>

//                             <FormGroup>
//                                 <Label for="examplePassword">Department</Label>
//                                 <Input
//                                     type="text"
//                                     name="department"
//                                     id="exampleDepartment"
//                                     placeholder=""
//                                     value={fields.department}
//                                     onChange={(e) => {
//                                         handleChange(e)
//                                     }}
//                                 />
//                             </FormGroup>
//                             <div className="errorMsg">{errors.department}</div>

//                             <FormGroup>
//                                 <Label for="examplePassword">Mobile No.</Label>
//                                 <Input
//                                     type="text"
//                                     name="mobileno"
//                                     id="exampleMobileno"
//                                     placeholder=""
//                                     value={fields.mobileno}
//                                     onChange={(e) => {
//                                         handleChange(e)
//                                     }}
//                                 />
//                             </FormGroup>
//                             <div className="errorMsg">{errors.mobileno}</div>
//                         </Form>
//                         <MDBBtn color="mdb-color" onClick={handleSubmitForm}>
//                             Update
//                         </MDBBtn>
//                         <MDBBtn color="mdb-color" onClick={handleCancel}>
//                             Cancel
//                         </MDBBtn>
//                     </MDBCardBody>
//                 </MDBCard>
//             </MDBCol>
//         </>
//     )
// }
