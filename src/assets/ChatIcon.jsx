import React from 'react';

const ChatIcon = ({ width = 20, height = 20, className = '', ...props }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6V9M14,14H6V12H14V14M18,8H6V6H18V8Z"/>
    </svg>
  );
};

export default ChatIcon;