import React from 'react';

import COLORS from '@theme/colors';

const Label = () => (
  <>
    <div className="loader_wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> 
    </div>

    <style jsx>{`
      .loader_wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        width: 100%;
        margin: 15px 0;
      }

      .lds-ring {
        position: relative;
        width: 64px;
        height: 64px;
      }

      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 25px;
        height: 25px;
        margin: 3px;
        border: 3px solid ${COLORS.background_dark_blue};
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${COLORS.background_dark_blue} transparent transparent transparent;
      }

      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }

      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }          
    `}</style>
  </>
)

export default Label;