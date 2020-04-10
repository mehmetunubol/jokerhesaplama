import React from 'react';
import { useStyles } from './styles/mainStyles';
import './styles/joker.css';

import { Link } from "react-scroll";

export default function Cover() {
  const classes = useStyles();

  return (
	<div className={classes.cover}>
    	<Link
    		activeClass="passive"
	        to="footer"
	        spy={true}
	        smooth={true}
	        offset={-70}
	        duration={1500}
      	>
      		<button className="CoverLink right">  
      			HEMEN HESAPLA !
      		</button>
      	</Link>	
      </div>
  );
}