import React from 'react';

import ChatHead from '@common/chat-components/ChatHead';
import UserHead from '@common/chat-components/UserHead';

import COLORS from '@theme/colors';

const SideBar = ({ children }) => (
  <>
    <div className="sidebar_wrapper">
      { children }
    </div>

    <style jsx>{`
      .sidebar_wrapper {
        background: ${COLORS.background_dark};
        padding: 20px;
        width: calc(28% - 40px);
        overflow-y: scroll;
      }

      .toggle_expand {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        margin: 20px 0 45px 0;
      }
    `}</style>
  </>
)

export default SideBar;
