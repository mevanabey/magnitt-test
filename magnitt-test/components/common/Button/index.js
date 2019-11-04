import React from 'react';

import colors from '@theme/colors';

const Button = ({ children }) => {

  return (
    <>
      <button className="custom-button">
          {children}
      </button>

      <style jsx>{`
        .custom-button {
          background: #91c864;
          border: 0;
          border-radius: 4px;
          color: #fff;
          font-size: 16px;
          padding: 12px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Button;
