import type { FC } from 'react';

interface IProps {
  className?: string;
  onClick?: () => void;
}

const BackArrowIcon: FC<IProps> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick && onClick()}
    >
      <path
        d="M9.42409 2.81904C9.93177 2.31136 9.93177 1.48824 9.42409 0.98056C8.91641 0.472879 8.09329 0.472879 7.58561 0.98056L0.640107 7.92607C0.0470515 8.51912 0.0470428 9.48066 0.640107 10.0737L7.58561 17.0192C8.09329 17.5269 8.91641 17.5269 9.42409 17.0192C9.93177 16.5116 9.93177 15.6884 9.42409 15.1808L3.24323 8.9999L9.42409 2.81904Z"
        fill="black"
      />
    </svg>
  );
};

export default BackArrowIcon;
