import React from 'react';

import colors from '@theme/colors';

import AngleDownIcon from '@icons/mdi_angle-down.svg';

const Select = ({ options, defaultOption, _updateValue }) => {

  const handleChange = (e) => {
    _updateValue(e.target.value);
  }

  return (
    <>
      <div className="custom-select_wrapper">
        <span className="custom-select_icon"><AngleDownIcon /></span>

        <select className="custom-select" value={defaultOption} onChange={handleChange}>
            { options.map((option, index) => 
                <option key={index} value={typeof option === 'object' ? option.value : option}>
                  {typeof option === 'object' ? option.label : option}
                </option>
            )}
        </select>
      </div>

      <style jsx>{`
        .custom-select_wrapper {
          position: relative;
        }

        .custom-select {
          background-size: 15px 15px;
          border: 1px solid #E5E5E5;
          border-radius: 4px;
          color: #848484;
          cursor: pointer;
          font-size: 14px;
          width: 100%;
          padding: 10px 25px 10px 15px;

          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        .custom-select_icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

        .custom-select_icon :global(svg) {
          width: 15px;
        }

        .custom-select_icon :global(svg path) {
          fill: ${colors.green};
        }
      `}</style>
    </>
  )
}

export default Select;
