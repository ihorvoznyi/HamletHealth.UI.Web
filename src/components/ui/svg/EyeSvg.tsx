/* eslint-disable max-len */
import { FC, SVGProps } from 'react';

interface PropsType extends SVGProps<SVGSVGElement> {
  isShowLine: boolean;
}

export const EyeSvg: FC<PropsType> = ({ isShowLine, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 7C8.36364 7 5.25818 9.26182 4 12.4545C5.25818 15.6473 8.36364 17.9091 12 17.9091C15.6364 17.9091 18.7418 15.6473 20 12.4545C18.7418 9.26182 15.6364 7 12 7ZM12 16.0909C9.99273 16.0909 8.36364 14.4618 8.36364 12.4545C8.36364 10.4473 9.99273 8.81818 12 8.81818C14.0073 8.81818 15.6364 10.4473 15.6364 12.4545C15.6364 14.4618 14.0073 16.0909 12 16.0909ZM12 10.2727C10.7927 10.2727 9.81818 11.2473 9.81818 12.4545C9.81818 13.6618 10.7927 14.6364 12 14.6364C13.2073 14.6364 14.1818 13.6618 14.1818 12.4545C14.1818 11.2473 13.2073 10.2727 12 10.2727Z" fill="#D8D3CF"/>
      {!isShowLine && <line x1="5" y1="5" x2="19" y2="19" stroke="#D8D3CF" strokeWidth="2"/>}
    </svg>
  );
};
