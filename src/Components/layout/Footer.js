import React from 'react'
const Footer = () => {
   const  footstyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center"
    }
    return (
       
        <div class="footer" style = {footstyle}>
          <p>Footer</p>
        </div>
    );
}
 
export default Footer;