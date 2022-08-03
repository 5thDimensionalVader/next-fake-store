import React from 'react';
import { useRouter } from 'next/router';
import propsType from "prop-types";


const NavItem = ({ item }) => {
  const router = useRouter();
  return <>{router.pathname === "/" ? item : ''}</>
}

export default NavItem;

NavItem.propsType = {
  item: propsType.string
}