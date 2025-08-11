import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  icon: React.ReactNode; // not StaticImageData
}
interface CustomDropdownProps {
  label: string;
  items: DropdownItem[];
}
const Dropdownfun: React.FC<CustomDropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen && toggleRef.current && menuRef.current) {
      const toggleWidth = toggleRef.current.offsetWidth;
      menuRef.current.style.width = `${toggleWidth}px`;
    }
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <button
        ref={toggleRef}
        onClick={toggleDropdown}
        className="bg-[#00d2ed] text-[#003e58] px-1 py-1 rounded  text-center  border-[4px] border-[#009baf] w-[119px]"
      >
        {label}
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute mt-1 z-10 shadow-md rounded-md overflow-hidden bg-[#00d2ed] text-[#003e58] px-2 py-1 rounded w-full text-left  border-[4px] border-[#009baf] "
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="px-3 py-2 hover:bg-[#003e58] cursor-pointer text-sm hover:text-[white]"
              onClick={() => {
                console.log(`Selected: ${item}`);
                setIsOpen(false);
              }}
            >
                <div className="flex gap-2">
             <span>{item.icon}</span>
              <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdownfun;
