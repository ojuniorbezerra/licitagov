import React, { Fragment } from 'react';
import Bookmark from '../bookmark'
import {Container,Row,Col,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import { Home } from 'react-feather';
import {Link} from 'react-router-dom'

const Breadcrumbs = (props) => {
    return (
        <Fragment>
            <Container fluid={true}>
            <div className="page-header">
              <Row>
                <Col xs="6">
                  <h3>{props.title}</h3>
                  <Breadcrumb>
                    <BreadcrumbItem><Link to={`${process.env.PUBLIC_URL}/dashboard/default`}><Home/></Link></BreadcrumbItem>
                    <BreadcrumbItem>{props.parent}</BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                <Bookmark/>
              </Row>
            </div>
          </Container>
        </Fragment>
    );
}

export default Breadcrumbs;