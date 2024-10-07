import React from 'react';
import icon_copy from '../../../assets/images/icons/icon_copy.png'
function Primary_Input({ placeholder, type, onChange, value, className,copy, readOnly }) {
  return (
    <div className={`pt-[28px] ${className}`}>
      <div className='relative'>
        <p className='absolute -top-3 left-4 bg-white px-1 text-primary-placeholder-color z-30'>{placeholder}</p>
        <input
          className={`w-full px-[15px] py-[16px] font-medium  border-[1px] rounded-[8px] relative focus:border-primary-title-color outline-none text-primary-text-color border-gray-300 `}
          placeholder={placeholder}
          type={type}
          name={{placeholder}}
          id={placeholder}
          onChange={onChange}
          defaultValue={value}
          autoComplete="off"
          
        />
        {
          copy&&
        <img src={icon_copy} alt='copy icon' className=' absolute right-4 top-5 cursor-pointer '/>
      }
      </div>
    </div>
  );
}
export default Primary_Input;