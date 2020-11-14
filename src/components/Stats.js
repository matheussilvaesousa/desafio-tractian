import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

function Stats(props) {
  return <Text>{props.name}</Text>;
}

export default Stats;
