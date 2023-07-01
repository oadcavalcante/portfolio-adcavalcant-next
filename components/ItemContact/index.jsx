import React from "react";
import { Item, Icon, Text, A } from "./style";

export default function ItemContact({ IconFa, LinkContact, Nome }) {
  return (
    <Item>
      <A href={LinkContact} target="_blank" rel="noopener noreferrer">
        <Icon>
          <IconFa />
        </Icon>
        <Text>{Nome}</Text>
      </A>
    </Item>
  );
}
