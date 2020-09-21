import React, { Fragment } from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = (props) => {
    return (
        <Fragment>
        <footer className="footer">
          <Container fluid={true}>
            <Row>
              <Col md="6" className="footer-copyright">
                <p className="mb-0">Copyright 2018 © Cuba All rights reserved.</p>
              </Col>
              <Col md="6">
                <p className="pull-right mb-0">Hand crafted & made with <i className="fa fa-heart font-secondary"></i></p>
              </Col>
            </Row>
          </Container>
        </footer>
        </Fragment>
    );
}

export default Footer;