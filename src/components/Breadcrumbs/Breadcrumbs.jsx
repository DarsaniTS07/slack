import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { PiNumberCircleFourFill } from "react-icons/pi";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link fontSize="15px" underline="hover" key="1" color="primary" href="/" onClick={handleClick}>
      Add Contact
    </Link>,
    <Link
    fontSize="15px"
      underline="hover"
      key="2"
      color="primary"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Lead Details
    </Link>,
    <Link  fontSize="15px" underline="hover" key="1" color="primary" href="/" onClick={handleClick}>
    Preview and Create Lead
  </Link>,
  <Link fontSize="15px" underline="hover" key="1" color="primary" href="/" onClick={handleClick}>
  Quotation Details
</Link>,
    <Typography key="3"  color= 'primary' fontSize="15px"  display="flex" justifyContent="center">
      <PiNumberCircleFourFill style={{fontSize:"20px", paddingRight:"3px"}} />
      Preview and Create
    </Typography>,
  ];

  return (
    
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" color='primary'/>}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
  );
}
