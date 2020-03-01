import React from "react";
import {Nav} from "react-bootstrap";

const SideNavigation = ({paths})=>{
    const [path,setPath] = React.useState("/home");

    const renderPath = (paths)=>{
       return   paths.map((item,index)=>{
            console.log(item);
              if(Array.isArray(item)){
                 return ( <Nav>{renderPath(item) }</Nav>);

              }else{
              return <Nav.Link {...item}>{item.title}</Nav.Link>
              }
          })
    }
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
          {renderPath(paths)}
        </Nav>
    )

}

export default SideNavigation;