import React from "react";
import { Col, Row } from "../components/Layout";
import { Text } from "../components/Text";

import { theme } from "../theme";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <Row height="80px" backgroundColor={theme.background} width="100%">
      <Row
        align="center"
        justify="space-between"
        padding="5px 20px"
        width="calc(100% - 40px)"
        maxWidth="1300px !important"
      >
        <Col width="auto">
          <Text>Heroes of extraterrestrial societies</Text>
          <Text>Copyright &copy; {new Date().getFullYear()}</Text>
        </Col>

        <Row mgap="0 10px 0 0">
          <FaTwitter
            color={theme.primaryLight}
            size="30"
            href="https://twitter.com/HOESNFT"
          />
          <FaInstagram
            color={theme.primaryLight}
            size="30"
            href="https://www.instagram.com/hoesnft"
          />
          <FaDiscord
            color={theme.primaryLight}
            size="30"
            href="https://discord.gg/4VbaqFHP"
          />
        </Row>
      </Row>
    </Row>
  );
};
export default Footer;
