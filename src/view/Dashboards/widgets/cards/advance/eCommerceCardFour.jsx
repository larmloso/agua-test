import React from "react";

import { Card, Row, Col, Rate } from "antd";

import xboxGamepad from "../../../../../assets/images/product/xbox-1.png";

export default function EcommerceCardFour() {
  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-3 da-eCommerceCardOne">
      <Row gutter={32}>
        <Col className="da-text-center" span={24}>
          <h5 className="da-mb-4 da-eCommerceCardOne-text-overlay">Xbox Wireless Game Console</h5>

          <p className="da-caption da-mb-0 da-text-color-black-60">
            By <span className="da-text-color-black-80"> Microsoft</span>
          </p>

          <div>
            <img
              src={xboxGamepad}
              alt="Xbox Wireless Game Console"
              style={{
                maxHeight: 120
              }}
            />
          </div>

          <Rate defaultValue={4.5} size={16} allowHalf></Rate>

          <h3 className="da-mb-0 da-mt-8  da-text-color-primary-1 da-font-weight-700">
            $39.00
          </h3>
        </Col>
      </Row>
    </Card>
  );
}
