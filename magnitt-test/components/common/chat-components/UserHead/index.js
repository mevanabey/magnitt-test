import React from 'react';

import COLORS from '@theme/colors';

const UserHead = ({ name, icon_color, status }) => (
  <>
    <div className="userhead_wrapper">
      <div className="user_image">{name.charAt(0)}</div>
      <div className="user_details">
        <div className="user_name">{name}</div>
        <span className="user_status">{status}</span>
      </div>
    </div>

    <style jsx>{`
      .userhead_wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        align-content: space-between;
      }

      .user_details {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: stretch;

        position: relative;
        z-index: 1;
      }

      .user_image {
        background: #000;
        border-radius: 50%;
        color: #fff;
        display: block;
        font-size: 80%;
        font-weight: 700;
        line-height: 40px;
        margin: 0;
        height: 40px;
        width: 40px;
        text-align: center;
      }

      .user_name {
        color: #EBEDEF;
        font-weight: 500;
        font-size: 20px;
        margin: 5px 5px 5px 0;
      }

      .user_status {
        background: #35C37F;
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        padding: 2px 10px;
      }
    `}</style>
  </>
)

export default UserHead;