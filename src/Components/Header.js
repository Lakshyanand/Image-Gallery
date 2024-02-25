import React from "react";

const Header = (props) => {
    return(
        <div style={{backgroundColor:'black', color:'white', height:'5vh'}}>
            <h3 style={{margin:0, paddingTop:'5px'}}>{props.title}</h3>
        </div>
    );
};

export default Header;