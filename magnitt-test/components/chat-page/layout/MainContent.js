import React from 'react';

import COLORS from '@theme/colors';

const MainContent = ({ children }) => (
  <>
    <div className="maincontent_wrapper">
      { children }
    </div>

    <style jsx>{`
      .maincontent_wrapper {
        background: ${COLORS.background_light};
        width: 72%;
      }
    `}</style>
  </>
)

export default MainContent;
