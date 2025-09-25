import clsx from 'clsx';
import { SearchOutlineIcon } from '@vapor-ui/icons';

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const TextInput = ({ placeholder = '검색', value, onChange, className = '' }: TextInputProps) => {
  return (
    <div
      className={clsx(
        'bg-white box-border flex flex-col gap-[10px] items-start justify-center pl-[12px] pr-0 py-[4px] rounded-[20px] w-full',
        className
      )}
    >
      <div className="flex gap-[4px] items-center w-full">
        <div className="flex gap-[4px] items-center shrink-0 w-full">
          <div className="size-[20px] shrink-0">
            <SearchOutlineIcon className="w-full h-full text-[#959595]" />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className="font-['Pretendard'] text-[14px] text-black leading-[22px] tracking-[-0.1px] bg-transparent border-none outline-none placeholder:text-[#959595] flex-1 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
