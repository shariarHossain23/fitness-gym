import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <div>
        <Container>
          <Row className=" mt-5 mx-auto ">
            <h2 className="text-center mt-5">
              Difference between Authentication and Authorization
            </h2>
            <Col md={6} className="mt-3">
              <h4>Authentication</h4>
              <li>Authentication verifies who the user is.</li>
              <li>
                Authentication works through passwords, one-time pins, biometric
                information, and other information provided or entered by the
                user.
              </li>
              <li>
                Authentication is the first step of a good identity and access
                management process.
              </li>
            </Col>
            <Col md={6} className="mt-3">
              <h4>Authorization</h4>
              <li>
                {" "}
                Authorization determines what resources a user can access.
              </li>
              <li>
                Authorization works through settings that are implemented and
                maintained by the organization.
              </li>
              <li>Authorization always takes place after authentication.</li>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <h2>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <Col md={12}>
              <p>
                Firebase Authentication aims to make building secure
                authentication systems easy, while improving the sign-in and
                onboarding experience for end users. It provides an end-to-end
                identity solution, supporting email and password accounts, phone
                auth, and Google, Twitter, Facebook, and GitHub login, and
                more.FirebaseUI provides a customizable, open source, drop-in
                auth solution that handles the UI flows for signing in users.
                The FirebaseUI Auth component implements best practices for
                authentication on mobile devices and websites, which can
                maximize sign-in and sign-up conversion for your app.Built by
                the same team that developed Google Sign-in, Smart Lock and
                Chrome Password Manager, Firebase security applies Google's
                internal expertise of managing one of the largest account
                databases in the world.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <h1 className="mt-5 ">
              {" "}
              What other services does firebase provide other than
              authentication
            </h1>
            <Col md={12}>
              <ol>
                <li>Parse</li>
                <li>Supabase</li>
                <li>Kuzzle</li>
                <li>Back4App</li>
                <li>Cloud Firestore</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blogs;
