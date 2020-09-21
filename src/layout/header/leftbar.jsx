import React, { Fragment, useState, useLayoutEffect, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { X, Layers, Grid } from 'react-feather'
import { Link } from 'react-router-dom'
import { errorPages, authPages, usefullPages, comingsoonPages } from './pages'
import configDB from '../../data/customizer/config';
const Leftbar = (props) => {

  const [bonusui, setBonusUI] = useState(false)
  const [sidebartoogle, setSidebartoogle] = useState(true)
  const [megaboxtoggle1, setMegaboxtoggle1] = useState(true)
  const [megaboxtoggle2, setMegaboxtoggle2] = useState(true)
  const [megaboxtoggle3, setMegaboxtoggle3] = useState(true)
  const [megaboxtoggle4, setMegaboxtoggle4] = useState(true)
  const width = useWindowSize()

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  useEffect(() => {
    if (width <= 767) {
      setMegaboxtoggle1(true)
      setMegaboxtoggle2(true)
      setMegaboxtoggle3(true)
      setMegaboxtoggle4(true)
    } else {
      setMegaboxtoggle1(false)
      setMegaboxtoggle2(false)
      setMegaboxtoggle3(false)
      setMegaboxtoggle4(false)
    }
  }, [width])

  const responsiveMegaMenuclose = () => {
    setBonusUI(false)
    document.querySelector(".menu-content").classList.remove("d-block")
  }

  const ToggleBonusUI = (value) => {
    if (value) {
      setBonusUI(!value)
      document.querySelector(".menu-content").classList.remove("d-block")
    } else {
      setBonusUI(!value)
      if (width <= 991) {
        document.querySelector(".page-main-header").className = "page-main-header close_icon";
        document.querySelector(".main-nav").className = "main-nav close_icon " + configDB.data.settings.sidebar_background_setting;
        document.querySelector(".menu-content").classList.add("d-block")
      } else {
        document.querySelector(".menu-content").classList.add("d-block")
      }
    }
  }

  const openCloseSidebar = (toggle) => {
    if (toggle) {
      setSidebartoogle(!toggle);
      document.querySelector(".page-main-header").className = "page-main-header close_icon";
      document.querySelector(".main-nav").className = "main-nav close_icon " + configDB.data.settings.sidebar_background_setting;
      document.querySelector(".menu-content").classList.remove("d-block")
    } else {
      setSidebartoogle(!toggle);
      document.querySelector(".page-main-header").className = "page-main-header";
      document.querySelector(".main-nav").className = "main-nav " + configDB.data.settings.sidebar_background_setting;
    }
  };

  const responsiveMegaBox1 = (megabox) => {
    if (megabox) {
      setMegaboxtoggle1(!megabox);
    } else {
      setMegaboxtoggle1(!megabox);
    }
  }
  const responsiveMegaBox2 = (megabox) => {
    if (megabox) {
      setMegaboxtoggle2(!megabox);
    } else {
      setMegaboxtoggle2(!megabox);
    }
  }
  const responsiveMegaBox3 = (megabox) => {
    if (megabox) {
      setMegaboxtoggle3(!megabox);
    } else {
      setMegaboxtoggle3(!megabox);
    }
  }
  const responsiveMegaBox4 = (megabox) => {
    if (megabox) {
      setMegaboxtoggle4(!megabox);
    } else {
      setMegaboxtoggle4(!megabox);
    }
  }

  return (
    <Fragment>
      <div className="main-header-left">
        <div className="logo-wrapper">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
            <img className="img-fluid for-light" src={require("../../assets/images/logo/logo.png")} alt="" />
            <img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="" />
          </Link>
        </div>
        <div className="toggle-sidebar" onClick={() => openCloseSidebar(sidebartoogle)}><Grid className="status_toggle middle" id="sidebar-toggle" /></div>
      </div>
      <Col className="left-menu-header horizontal-wrapper pl-0">
        <ul className="horizontal-menu">
          <li className="mega-menu">
            <a className={`nav-link ${bonusui ? 'active' : ''}`} href="#javascript" onClick={() => ToggleBonusUI(bonusui)}><Layers /><span>Bonus Ui</span></a>
            <div className="mega-menu-container menu-content" style={bonusui ? { display: "" } : { display: "none" }}>
              <Container fluid={true}>
                <Row>
                  <Col className="mega-box" onClick={() => responsiveMegaBox1(megaboxtoggle1)}>
                    <div className="mobile-title d-none">
                      <h5>Mega menu</h5><X onClick={() => responsiveMegaMenuclose()} />
                    </div>
                    <div className="link-section icon">
                      <div className={`${megaboxtoggle1 ? "active" : ""}`}>
                        <h6>Error Page</h6>
                      </div>
                      <ul className={`${megaboxtoggle1 ? "d-none" : ""}`}>
                        {errorPages.map((pagesItem, i) =>
                          <li key={i}>
                            <Link to={pagesItem.path}>{pagesItem.title}</Link>
                          </li>)}
                      </ul>
                    </div>
                  </Col>
                  <Col className="mega-box" onClick={() => responsiveMegaBox2(megaboxtoggle2)}>
                    <div className="link-section doted">
                      <div className={`${megaboxtoggle2 ? "active" : ""}`}>
                        <h6>Authentication</h6>
                      </div>
                      <ul className={`${megaboxtoggle2 ? "d-none" : ""}`}>
                        {authPages.map((pagesItem, i) =>
                          <li key={i}><Link to={pagesItem.path}>{pagesItem.title}</Link></li>
                        )}

                      </ul>
                    </div>
                  </Col>
                  <Col className="mega-box" onClick={() => responsiveMegaBox3(megaboxtoggle3)}>
                    <div className="link-section dashed">
                      <div className={`${megaboxtoggle3 ? "active" : ""}`}>
                        <h6>Usefull Pages</h6>
                      </div>
                      <ul className={`${megaboxtoggle3 ? "d-none" : ""}`}>
                        {usefullPages.map((pagesItem, i) =>
                          <li key={i}><Link to={pagesItem.path}>{pagesItem.title}</Link></li>
                        )}
                      </ul>
                    </div>
                  </Col>
                  <Col className="mega-box" onClick={() => responsiveMegaBox4(megaboxtoggle4)}>
                    <div className="link-section">
                      <div className={`${megaboxtoggle4 ? "active" : ""}`}>
                        <h6>Coming Soon</h6>
                      </div>
                      <ul className={`svg-icon ${megaboxtoggle4 ? "d-none" : ""}`}>
                        {comingsoonPages.map((pagesItem, i) =>
                          <li key={i}><Link to={pagesItem.path}><pagesItem.icon />Coming-soon</Link></li>
                        )}
                      </ul>

                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </li>
        </ul>
      </Col>
    </Fragment>
  );
}

export default Leftbar;