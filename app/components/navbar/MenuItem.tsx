"use client";

interface MenuItemProps {
  onClick?: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-3 sm:px-4 py-2 sm:py-3 hover:bg-neutral-100 transition font-semibold text-sm sm:text-base"
    >
      {label}
    </div>
  );
};

export default MenuItem;
