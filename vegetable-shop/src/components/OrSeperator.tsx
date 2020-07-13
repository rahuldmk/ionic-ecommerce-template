import React from 'react';
import './OrSeperator.css';

interface lineSeperatorProps {
    ordisplay: boolean;
    color:string
}
const OrSeperator: React.FC<lineSeperatorProps> = ({ ordisplay,color }) => {

    const orstyle={
        'display':'flex',
        'justifyContent':'center',
        'alignItems': 'center',
        'color':'grey',
        '&::after':{
            'content': "",
            'display': 'block',
            'height':'1px',
            'margin': '0 10px',
            'width': '100%',
            'background':color
    },
        '&::before': {
            'content': "",
            'display': 'block',
            'height':'1px',
            'margin': '0 10px',
            'width': '100%',
            'background':color
        }
    };


    if (ordisplay) {
        return (
            <div  className="or">
                <span className="orlabel">or</span>
            </div>
        )
    }
    else {
        return <span>line</span>;
    }
}
export default OrSeperator;