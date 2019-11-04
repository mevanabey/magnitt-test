import React, { useEffect } from 'react';

const TextInput = ({name, label, icon, styles, _updateValue}) => {
  const handleChange = (e) => {
    _updateValue(name, e.target.value);
  }

  return (
    <>
      <div className="custom-input_wrapper">
        { icon &&
          <span className="custom-input_icon">{icon}</span>
        }
        <input type="text" name={name} placeholder={label} onChange={handleChange} />  
      </div>

      <style jsx>{`
        .custom-input_wrapper {
          width: 100%; 

          position: relative;
        }

        input {
          background: ${styles && styles.background ? styles.background : 'none'};
          border: ${styles && styles.border ? styles.border : `1px solid #CCC`};
          border-radius: 4px;
          box-sizing: border-box;
          color: ${styles && styles.color ? styles.color : '#fff'};
          font-size: 16px;
          padding: 16px 35px 16px 15px;
          width: 100%;
        }

        input::placeholder {
          color: ${styles && styles.ph_color ? styles.ph_color : '#fff'};
          font-weight: 300;
        }

        .custom-input_icon {
          cursor: pointer;

          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
        }
      `}</style>
    </>
  )
}

export default TextInput;