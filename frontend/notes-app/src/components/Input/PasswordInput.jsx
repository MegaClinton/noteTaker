import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className='flex items-center bg-black border-[2px] border-[#00ff00] px-5 rounded mb-3'>
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? 'text' : 'password'}
        placeholder={placeholder || 'Password'}
        className='w-full text-sm bg-black text-[#00ff00] py-3 mr-3 rounded outline-none'
      />

      {isShowPassword ? (
        <FaRegEye
          size={22}
          className='cursor-pointer bg-black border-[2px] border-[#00ff00] text-[#00ff00] p-1 rounded'
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className='cursor-pointer bg-black border-[2px] border-[#00ff00] text-[#00ff00] p-1 rounded'
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;
