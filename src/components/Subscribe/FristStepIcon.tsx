import type { FC } from 'react';

interface IProps {
  className?: string;
  onClick?: () => void;
}

const FirstStepIcon: FC<IProps> = ({ className, onClick }) => {
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
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H4C1.79086 8 0 6.20914 0 4Z"
        fill="#252730"
      />
      <circle cx="32" cy="4" r="4" fill="#C6C6C6" />
    </svg>
  );
};
export default FirstStepIcon;
