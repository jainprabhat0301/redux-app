import React from 'react'
import "./test.css"
import structure from "../Assets/images/structure.png";
import Image from "../Assets/images/black.jpg";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function Test() {
    return (
        <div className="bgimg">
          
                <div style={{ width: "100%", height: "100%" }}>
                    <img src={structure} alt="structure" />
                    <h2 className="text">Hello</h2>
                    <h2 className="text2">Hello</h2>
                    <div className="text2">
                        <Card style={{ width: '10rem', height: '3rem' }}>
                            <Card.Body>
                                <Card.Title>TV WW X1</Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
           
        </div>
    )
}
