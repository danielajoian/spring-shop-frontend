import React from 'react';

export default function Footer() {

    const footerStyle = {
        left: "0",
	    bottom: "0",
	    width: "100%",
	    maxHeight: "200px",
	    color: "rgb(134, 167, 255)",
	    textAlign: "center",
        backgroundColor: "white",
        boxShadow: "0px -2px 4px -1px rgba(0,0,0,0.25)"
    }

    const textStyle = {
        backgroundColor: "rgb(255, 255, 255)",
        color: "black",
        textAlign: "centre"
    }

	return (
		<footer
            className="fixed-bottom"
            style={footerStyle}
		>

			<div className='p-3' style={textStyle}>© 2021 Copyright: CodeCool</div>
		</footer>
    );

}