import React, { useState } from "react";
import {Nav} from "react-bootstrap";
import SideNavigation from "../../blocks/sidenav/sideNavigation";
import {Button} from "react-bootstrap";

const paths =  [{href:"home",title:"home"},
{href:"home",title:"home"},
{href:"home",title:"home"},
{href:"home",title:"home"},
[{href:"home",title:"home"},{href:"home",title:"home"},{href:"home",title:"home"}],
];

const Playground = ()=>{
   const [navState,setNavState] = useState(true);
   return(
      <div>
         <Button onClick={()=>setNavState(!navState)}> Toggle </Button>
         <SideNavigation paths={paths} value={{state:navState}}/>
      </div>
 );
    
}

export default Playground;