import React from 'react';

export const LogoIcon = ({height, width, fill, ...props}) => {
    return (
        <svg
            width={width || '49'}
            height={height || '56'}
            viewBox="0 0 49 56"
            fill={fill || 'none'}
            {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M39.0268 12.0002C45.0754 16.4383 49 23.5763 49 31.6269C49 35.5177 48.0823 39.1949 46.4526 42.4573L41.8995 40.6095C43.3052 37.9212 44.1003 34.8665 44.1003 31.6269C44.1003 25.7401 41.4778 20.4628 37.3316 16.8877C38.17 15.3996 38.7548 13.7515 39.0268 12.0002ZM35.4515 53.4334C32.1559 55.0747 28.4369 56 24.5001 56C10.969 56 0 45.0878 0 31.6269C0 23.576 3.92455 16.4382 9.97361 12C10.2453 13.7514 10.8301 15.3995 11.6684 16.8877C7.52237 20.4627 4.89997 25.7401 4.89997 31.6269C4.89997 42.3956 13.6753 51.1253 24.5001 51.1253C27.7872 51.1253 30.8847 50.319 33.6053 48.8964L35.4515 53.4334Z"
                  fill="#A43270"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M33.954 21C37.0492 23.62 39 27.4414 39 31.698C39 39.5969 32.2843 46 24 46C15.7156 46 9 39.5969 9 31.698C9 27.4414 10.951 23.62 14.0459 21C15.9871 22.6432 18.3783 23.8138 21.021 24.3217L22.2637 27.6372H25.7368L26.9791 24.3215C29.6221 23.8137 32.0129 22.6432 33.954 21ZM25.7067 28.7697H22.2939L20.8627 41.2601L24.0004 43.8591L27.1376 41.2601L25.7067 28.7697Z"
                  fill="#514996"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M24.0001 0C29.5229 0 34 4.47716 34 10C34 15.5228 29.5229 20 24.0001 20C18.4771 20 14 15.5228 14 10C14 4.47716 18.4771 0 24.0001 0Z"
                  fill="#514996"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M40.8976 55L36 44L48 48.4894L44.8894 49.8305L46.4066 51.2211C45.4942 51.9417 44.644 52.7109 43.8603 53.5239L42.3604 52.1488L40.8976 55Z"
                  fill="#6B6D86"/>
        </svg>
    );
};