import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FormValidation from "../../Comman/FormValidation";
import { nanoid } from 'nanoid'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { addEmpToList,updateEmpFromList } from "./action";
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

export default function CreateEmp(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [fields, setfields] = useState({})
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
            if(props.type=="create"){
                var id=nanoid()
            }
            else if(props.type=="update"){
                var id=fields['id']
            }
            const new_emp = {
                // id: new Date().getTime()-1615878511645,
               
                id: id,
                firstname: fields['firstname'],
                lastname: fields['lastname'],
                email: fields['email'],
                department: fields['department'],
                mobileno: fields['mobileno'],
            }
            if(props.type=="create"){
                dispatch(addEmpToList(new_emp))            }
            else if(props.type=="update"){
                dispatch(updateEmpFromList(new_emp))
            }
        //    dispatch(addEmpToList(new_emp))
            handleClose()
            //history.push('/')
        }
        if(props.type=="create"){
            handleClear()          
        }
       
    }


    const handleClear = () => {
       setfields({})
       seterrors({})
    }

    const handleCancel = () => {
        handleClose()
        if(props.type=="create"){
            handleClear()          
        }

    }

    useEffect(() => {
       if(props.type=="update"){
           setfields(props.empData.empData)
       }
    }, [props.type])

    return (
        <>
            <Button variant= {props.type=="create" ? "primary" : "warning"} onClick={handleShow}>
            {props.type=="create" ? "Add Employee" : "Update"}
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {props.type=="create" ? "Add Employee" : "Update Employee"}</Modal.Title>
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


// <MDBCol className="p-d-flex p-jc-center">
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
//                                 Add Employee
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
//                         </Form>{' '}
//                         <MDBBtn
//                             color="success"
//                             onClick={handleSubmitForm}
//                         //     onClick={()=>{
//                         //        props.saveEmployeeData({
//                         //             id: "",
//                         //             firstname: firstname,
//                         //             lastname: lastname, email: email,
//                         //             department: department
//                         //         })
//                         // }}
//                         //    onClick={()=>saveEmployeeData()}
//                         >
//                             Save
//                         </MDBBtn>
//                         <MDBBtn color="mdb-color" onClick={handleCancel}>
//                             Cancel
//                         </MDBBtn>
//                     </MDBCardBody>
//                 </MDBCard>
//             </MDBCol>

            