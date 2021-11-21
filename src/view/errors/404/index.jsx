import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "antd";

import img from "../../../assets/images/pages/error/404.svg";

export default function Error404() {
  return (
    <Row className="da-bg-color-primary-4 da-text-center">
      <Col className="da-error-content da-py-32" span={24}>
        <Row className="da-h-100" align="middle" justify="center">
          <Col>
            <img className="da-d-block da-m-auto" src={img} alt="404" />

            <h1 className="da-error-content-title da-mb-sm-0 da-mb-8 da-font-weight-300">
              404
            </h1>

            <h2 className="h1 da-mb-sm-0 da-mb-16">Oops, Page not found!</h2>

            <p className="da-mb-32">You can go back home.</p>

            <Link to="/">
              <Button type="primary">Back to Home</Button>
            </Link>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="da-py-24">
        <p className="da-mb-0 da-badge-text">
          COPYRIGHT ©2020 Hypeople, All rights Reserved
        </p>
      </Col>
    </Row>
  );
}
