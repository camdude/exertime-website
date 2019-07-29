import React from 'react';

// import './TopControls.css';

const topControls = props => (
    <div style={{display: "flex", flexDirection: "row"}}>
        <p>Show</p>
        <select defaultValue={props.default} onChange={props.selected}>
            <option value="5">5</option>
            <option value="10">10</option>  
            <option value="20">20</option>
        </select>
        <p>entries</p>
    </div>
);

export default topControls;