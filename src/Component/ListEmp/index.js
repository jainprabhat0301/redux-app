import React, { Component ,useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {  removeEmpFromList } from "./action";
import Modal from 'react-bootstrap/Modal';
import  DemoModal from "./RemoveEmp";
//import  emp_list  from "./selector";
import { Button } from 'reactstrap';
import {
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
} from 'mdbreact'

import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
} from 'react-router-dom'
import CreateEmp from './CreateEmp';
import UpdateEmp from './UpdateEmp';
import RemoveEmp from './RemoveEmp';

export default function ListEmp(props) {
     const history=useHistory()

     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    const dispatch = useDispatch()
   const emp_list = useSelector(state => state.Emp_list)
   // console.log('emp_list',emp_list);
    
   // console.log("emp_list",emp_list);
    const handleUpdate=(empData)=>{
       // console.log(empData);
        history.push("/update_emp",empData)
    }
    //console.log("listemployee props",props);

const handleModal=()=>{
    handleShow()
}

const handleRemove=(data)=>{
    dispatch(removeEmpFromList(data))
}
    return (
        <>
            <h2 className="text-center">EMPLOYEES LIST</h2>

            <MDBCol className="p-d-flex p-jc-center">
                <MDBCard
                    style={{
                        width: '100rem',
                        marginBottom: '2em',
                        marginTop: '2em',
                    }}
                >
                    <MDBCardBody>
                        {/* <Link to="/add_emp">
                            {' '}
                            <button className="btn btn-primary">
                                Add Employee
                            </button>{' '}
                        </Link> */}
                        <CreateEmp type="create"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <button className="btn btn-primary" onClick={() => this.logout()}>Logout</button> */}
                        <div>
                            <MDBTable striped>
                                <MDBTableHead>
                                    <tr>
                                        <th>SNo.</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Department</th>
                                        <th>Mobile No.</th>
                                        <th>Action</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {emp_list.map((data) => (
                                        <tr key={emp_list.indexOf(data) + 1}>
                                            <td>
                                                {emp_list.indexOf(data) + 1}
                                            </td>
                                            <td>{data.empData.firstname}</td>
                                            <td>{data.empData.lastname}</td>
                                            <td>{data.empData.email}</td>
                                            <td>{data.empData.department}</td>
                                            <td>{data.empData.mobileno}</td>
                                            <td>
                                                {/* <Button label="Updata" icon="pi pi-check" className="p-button-primary" />&nbsp; &nbsp; */}

                                                {/* <Link to="/add_emp">  <Button label="Update" icon="pi pi-pencil" className="p-button-warning"
                                                       /></Link> */}
                                                {/* <MDBBtn
                                                    style={{
                                                        marginRight: '10px',
                                                    }}
                                                    color="warning"
                                                    label="Update"
                                                    icon="pi pi-pencil"
                                                    className="p-button-warning"
                                                    onClick={()=>{handleUpdate(data)}}
                                                >Update</MDBBtn> */}

                                                <CreateEmp type="update" empData={data}/>

                                                {/* <MDBBtn
                                                 color="danger"
                                                    label="Remove"
                                                    icon="pi pi-times"
                                                    className="p-button-secondary"
                                                    onClick={() => {
                                                      //  props.removeEmp(data)
                                                     // dispatch(removeEmpFromList(data))
                                                     handleRemove(data)
                                                    }}
                                                >Remove</MDBBtn> */}
                                                <RemoveEmp data={data} handleRemove={handleRemove} />
                                               
                                            </td>
                                        </tr>
                                    ))}
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </>
    )
}

{
    /* <div >
                    <DataTable value={this.props.data}>
                        <Column field="firstname" header="First Name"></Column>
                        <Column field="lastname" header="Last Name"></Column>
                        <Column field="email" header="Email"></Column>
                        <Column field="department" header="Department"></Column>
                        <Column body={this.actionBodyTemplate}></Column>

                    </DataTable>
                </div> */
}

//     <div>
//     <MDBTable striped>
//         <MDBTableHead>
//             <tr>
//                 <th>SNo.</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Department</th>
//                 <th>Action</th>
//             </tr>
//         </MDBTableHead>
//         <MDBTableBody>

//             {
//                 this.props.data.map((data) =>
//                     <tr>
//                         <td>{this.props.data.indexOf(data) + 1}</td>
//                         <td>{data.empData.firstname}</td>
//                         <td>{data.empData.lastname}</td>
//                         <td>{data.empData.email}</td>
//                         <td>{data.empData.department}</td>
//                         <td>
//                             {/* <Button label="Updata" icon="pi pi-check" className="p-button-primary" />&nbsp; &nbsp; */}
//                             <Button label="Remove" icon="pi pi-times" className="p-button-secondary"
//                                 onClick={() => {
//                                     this.props.removeEmp(data)
//                                 }} />

//                         </td>
//                     </tr>
//                 )
//             }

//         </MDBTableBody>
//     </MDBTable>

// </div>
