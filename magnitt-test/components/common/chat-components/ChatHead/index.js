import React from 'react';

import COLORS from '@theme/colors';

const ChatHead = ({ name, user_type, user_id, icon_color, status, last_online, active = false, onPress }) => (
  <>
      <div className="chathead_wrapper" onClick={() => onPress(user_id)}>
        <span className={user_type}>{name.charAt(0)}</span>
        <div className="chathead_details">
          <div className="details_name">{name}</div>
          <div className="details_time">9:27 AM</div>
        </div>
      </div>

    <style jsx>{`
      .chathead_wrapper {
        cursor: pointer;
        margin: 20px 0;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: space-between;

        position: relative;
      }

      .chathead_wrapper:before {
        background: ${active ? COLORS.background_dark_blue : 'none'};
        border-radius: 15px;
        content: '';
        display: block;
        height: calc(100% + 18px);
        width: calc(100% + 30px);
        transition: background 0.3s ease-in-out;

        position: absolute;
        top: -9px;
        left: -30px;
      }

      .chathead_wrapper:hover:before {
        background: ${COLORS.background_dark_blue};
      }

      .chathead_details {
        padding: 0 10px;
        width: calc(100% - 30px);
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
        align-content: space-between;

        position: relative;
        z-index: 1;
      }

      .chathead_details .details_name {
        color: #D8DBE0;
        font-size: 16px;
        font-weight: 500;
        margin: 0 0 5px 0;
      }

      .chathead_details .details_time {
        color: #A8ABAD;
        font-size: 12px;
        font-weight: 300;
      }

      .org, .person {
        background: ${icon_color};
        color: #fff;
        display: block;
        font-size: 80%;
        font-weight: 700;
        line-height: 32px;
        margin: 0;
        height: 32px;
        width: 32px;
        text-align: center;
        text-transform: uppercase;

        position: relative;
        z-index: 1;
      }

      .org {
        border-radius: 4px;
      }

      .person {
        border-radius: 50%;
    }
    `}</style>
  </>
)

export default ChatHead;
