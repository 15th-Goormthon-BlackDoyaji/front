import type { FC } from 'react';

interface IProps {
  className?: string;
  onClick?: () => void;
}

const SecondStepIcon: FC<IProps> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      width="36"
      height="8"
      viewBox="0 0 36 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick && onClick()}
    >
      <circle cx="4" cy="4" r="4" fill="#C6C6C6" />
      <path
        d="M16 4C16 1.79086 17.7909 0 20 0H32C34.2091 0 36 1.79086 36 4C36 6.20914 34.2091 8 32 8H20C17.7909 8 16 6.20914 16 4Z"
        fill="#252730"
      />
    </svg>
  );
};
export default SecondStepIcon;
