import React from 'react';

const Error = () => {
    const style = {
		border: "1px solid black",
		margin: "100px",
		padding: "50px",
		background: "red",
		color: "black",
		borderRadius: "5px",
	};
    return (
        <div style={style}>
            <h5>Error</h5>
        </div>
    );
};

export default Error;