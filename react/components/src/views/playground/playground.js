import React from "react";
import {Nav} from "react-bootstrap";
import SideNavigation from "./sideNavigation";

const paths =  [{href:"home",title:"home"},
{href:"home",title:"home"},
{href:"home",title:"home"},
{href:"home",title:"home"},
[{href:"home",title:"home"},{href:"home",title:"home"},{href:"home",title:"home"}],
];

const Playground = ()=>{
   return(
      <div>
       <SideNavigation paths={paths}/>
      </div>
 );
    
}

export default Playground;