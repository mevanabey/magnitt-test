import React from 'react';

import TextInput from '@common/inputs/TextInput';
import COLORS from '@theme/colors';

import SearchIcon from '@icons/mdi_search.svg';

const Search = ({name, placeholder = 'Search', _updateSearchValue}) => {
  const handleChange = (name, value) => {
    _updateSearchValue(value);
  }

  return (
    <>
      <div className="loader_wrapper">
        <TextInput 
          label={placeholder} 
          icon={<SearchIcon />} 
          styles={ {'background': COLORS.background_dark_blue, 'border': '0'} } 
          _updateValue={handleChange}
        />
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
          border: 3px solid ${COLORS.green};
          border-radius: 50%;
          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: ${COLORS.green} transparent transparent transparent;
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
}

export default Search;