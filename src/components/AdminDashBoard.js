import React from "react";
import { Card, Row, Container, Col, CardColumns } from "react-bootstrap";
import "../styles/Dashboard.css";

const DashBoard = () => (
    <Container fluid style={{ padding: "4rem" }} id="header-container">
        <CardColumns>
            <Row className="row justify-content-md-center">
                <Col md={4}>
                    <a href="/adminManageUsers">
                        <Card style={{ margin: "1rem" }}>
                            <Card.Body>
                                <Card.Title>Manage Users</Card.Title>
                                <Card.Text>
                                    Can register new user, view existing user,
                                    change password of user.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>

                <Col md={4}>
                    <a href="/adminAssessments">
                        <Card style={{ margin: "1rem" }}>
                            <Card.Body>
                                <Card.Title>Manage Assessments</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>

            <Row className="row justify-content-md-center">
                <Col md={4}>
                    <a href="/adminActivities">
                        <Card style={{ margin: "1rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    Manage Learning Activities
                                </Card.Title>
                                <Card.Text>
                                    Can create new activity, view existing
                                    activities, Edit activities, Delete
                                    activities.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>

                <Col md={4}>
                    <a href="/usersActivities">
                        <Card style={{ margin: "1rem" }}>
                            <Card.Body>
                                <Card.Title>Manage Users</Card.Title>
                                <Card.Text>
                                    Can register new user, view existing user,
                                    change password of user.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </CardColumns>
    </Container>
);

export default DashBoard;
