import React, { useState } from 'react';

import TextInput from '@common/inputs/TextInput';
import Select from '@common/inputs/Select';

import COLORS from '@theme/colors';

import SendIcon from '@icons/mdi_send.svg';

const COMPANIES = ['Mevan Abeydeera', 'XYZ Company', 'ABC Company'];

const Thread = ({ thread }) => {
  const [selectedResponder, setSelectedResponder] = useState(COMPANIES[0]);

  return (
    <>
      <div className="thread_wrapper">
        <div className="thread_header">
          <div className="thread_header_left">
            <div className="thread_receiver">
              <div className="thread_receiver_image">M</div>
              <div className="thread_receiver_name">ABC Company</div>
            </div>
            <span className="thread_receiver_members">8 Members</span>
          </div>
          <div className="thread_header_right">
            <span>Messaging as</span>
            <Select 
              options={COMPANIES} 
              defaultOption={selectedResponder}
              _updateValue={setSelectedResponder}
            />
          </div>
        </div>
        <div className="thread">
          { thread &&
            <div className="construction-message">
              Thread update has not been implemented. The thread page is still being brewed. <br /><br />
              Current thread: <span>{ typeof thread.thread_id === 'string' ? thread.thread_id : 'New thread' }</span>
            </div>
          }
          <div className="thread_message--sent">
            You're welcome!
          </div>
          <div className="thread_message--received">
            Thank you for your message!
          </div>
        </div>
        <div className="thread_footer">
          <TextInput 
            label={`Reply as ${selectedResponder}`}
            icon={<SendIcon />} 
            styles={{ 'border': '1px solid #E5E5E5', 'color': '#000', 'ph_color': '#858D96' }}
          />
        </div>
      </div>
      
      <style jsx>{`
          .maincontent_wrapper {
            background: ${COLORS.background_light};
            width: 72%;
          }

          .thread_wrapper {
            height: 100vh;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: stretch;
            align-content: space-between;
          }

          .thread_header {
            background: ${COLORS.background_white};
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
            height: 95px;
            padding: 0 32px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            align-content: stretch;

            position: relative;
            z-index: 3;
          }

          .thread_header_left {
            width: 50%;
          }

          .thread_receiver { 
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .thread_receiver_image {
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

          .thread_receiver_name {
            color: ${COLORS.title};
            font-size: 24px;
            font-weight: 400;
            padding: 0 0 0 15px;
          }

          .thread_receiver_members {
            color: ${COLORS.link};
            display: block;
            font-size: 14px;
            font-weight: 700;
            margin: 8px 0 0 0;
          }

          .thread_header_right {
            width: 25%;
          }

          .thread_header_right span {
            display: block;
            margin: 0 0 5px 0;
          }

          .thread {
            padding: 25px;
            margin: -15px 0;
            height: calc(100% - (70px + 95px));
            overflow-y: scroll;
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: stretch;

            position: relative;
            z-index: 2;
          }

          .thread_message--received, .thread_message--sent {
            background: ${COLORS.background_white};
            border-radius: 4px;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
            color: ${COLORS.text_black};
            font-size: 14px;
            font-weight: 400;
            margin: 0 0 15px 0;
            padding: 20px;

            position: relative;
          }

          .thread_message--sent {
            background: ${COLORS.background_green};
          }

          .thread_message--received:before, .thread_message--sent:before {
            content: '';
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-top: 18px solid ${COLORS.background_white};

            
            position: absolute;
            top: 0;
            left: -10px;
            z-index: 2;
          }

          .thread_message--received:before {
            border-top: 18px solid ${COLORS.background_white};
            // background: ${COLORS.background_white};
          }

          .thread_message--sent:before {
            border-top: 18px solid ${COLORS.background_green};
            // background: ${COLORS.background_green};
          }

          .thread_footer {
            background: ${COLORS.background_white};
            box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
            height: 70px;
            padding: 12px 32px;
            position: relative;
            z-index: 3;
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .construction-message {
            margin: 20px 0;
          }

          .construction-message span {
            color: #000;
            font-weight: 700;
          }
        `}</style>
    </>
)};

export default Thread;
  