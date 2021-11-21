import React from "react";

import { Card, Row, Col, Button, Tag, Rate } from "antd";
import { RiHeartFill, RiShoppingBagLine } from "react-icons/ri";

import polaroid from "../../../../../assets/images/product/white-cam-card.png";

export default function EcommerceCardOne() {
  return (
    <Card className="da-border-color-black-40 da-mb-32 da-card-5 da-eCommerceCardOne">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="top">
            <Tag className="da-border-none" color="blue">
              Featured
            </Tag>

            <Rate
              defaultValue={1}
              count={1}
              className="da-text-color-danger-1 da-border-radius-round remix-icon da-p-8 da-bg-color-danger-4 da-rate"
              character={<RiHeartFill />}
            ></Rate>
          </Row>
        </Col>

        <Col span={24}>
          <Col className="da-text-center">
            <img
              src={polaroid}
              alt="Digital Camera White Adition"
              style={{
                maxHeight: 191
              }}
            />
          </Col>

          <Row justify="space-between">
            <Col>
              <Rate defaultValue={4.5} size={16} allowHalf></Rate>
            </Col>

            <Col className="da-mb-16">
              <Row align="middle">
                <p className="da-mb-0 da-mr-4 da-text-color-black-60 da-text-line-through da-input-description">
                  $59.00
                </p>
                <p className="da-mb-0 da-text-color-primary-1 da-font-weight-700">
                  $39.00
                </p>
              </Row>
            </Col>
          </Row>

          <Col className="da-mb-24">
            <p className="da-mb-0 da-mr-4 da-text-color-black-100 da-p1-body da-font-weight-700">
              Digital Camera White Adition
            </p>
            <p className="da-mb-0 da-caption da-font-weight-400">
              Touch LCD Screen Zero Ink Camera
            </p>
          </Col>

          <Row gutter={16}>
            <Col sm={12} xs={24} className="da-mb-xs-16">
              <Button type="ghost" block>
                Check Detail
              </Button>
            </Col>

            <Col sm={12} xs={24}>
              <Button
                block
                icon={<RiShoppingBagLine className="remix-icon" />}
                type="primary"
                className="da-px-12"
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
