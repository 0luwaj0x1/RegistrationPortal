import React from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";


// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: inline-block;
  margin: 0 auto;
`;

const customStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform:' translate(-50%, -50%)',
    padding: '4rem 2rem',
    borderRadius: '.4rem',
    outline: 'none',
    display: 'flex',
    zIndex: '1000'
};

class Loading extends React.Component {


    render() {
        return (
            <div className="modal">
                <div className="modal__container" style={{zIndex: '500', backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                    <div style={customStyle} >
                        <ClipLoader
                            css={override}
                            size={60}
                            color={"#59a801ed"}
                            margin={10}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Loading;
