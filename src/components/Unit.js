import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

function Unit(props) {
  return <Text>{props.name + props.index}</Text>;
}

export default Unit;
