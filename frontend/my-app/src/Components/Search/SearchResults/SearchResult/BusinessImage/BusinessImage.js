import React , { Fragment } from 'react';
import './BusinessImage.css';
import {
    Image,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ButtonGroup,
    Flex,
    Link,
    Spacer
  } from '@chakra-ui/react';


  function BusinessImage(props) {
    return (
        <Fragment>

        <img className = 'business-image' 
        img src = {props.imgb} 
        alt = 'oski'
        />
        </Fragment>
    )
  }

  export default BusinessImage;