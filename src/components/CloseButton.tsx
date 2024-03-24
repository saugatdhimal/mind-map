import cn from "@utils/cn";

type CloseButtonProps = {
  isVisible: boolean;
  onClick: () => void;
};

const CloseButton = ({ isVisible, onClick }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        ["hidden", !isVisible],
        "bg-white rounded-sm absolute top-0.5 right-0.5 w-3 h-3 bg-[#EFEBE5] fill-red-600 z-20"
      )}
    >
      <svg
        viewBox="0 0 64 64"
        className="absolute right-0 left-px top-px w-2.5 h-2.5"
      >
        <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
      </svg>
    </button>
  );
};

export default CloseButton;
