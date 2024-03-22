import { useCallback } from "react";
import { useModalStore } from "@store/index";
import cn from "@utils/cn";

const Modal = () => {
  const openModal = useModalStore((state) => state.openModal);
  const { name, positive, negative, comments } = useModalStore(
    (state) => state.nodeData
  );
  const setOpenModal = useModalStore((state) => state.setOpenModal);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <div
      className={cn(
        ["hidden", !openModal],
        "fixed inset-0 bg-black/80 z-50 flex justify-center items-center"
      )}
    >
      <div className="flex flex-col gap-2 rounded-md bg-black">
        <div className="flex justify-between p-4 border-b border-b-gray-600">
          <h2 className="text-white text-lg">Edit Node</h2>
          <button
            onClick={handleCloseModal}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white fill-white hover:fill-black border-2 border-gray-600"
          >
            <svg viewBox="0 0 64 64" className="w-4 h-4">
              <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex flex-row justify-between gap-4">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              defaultValue={name}
              className="w-40 h-8 p-2 rounded-sm border-gray-600 border-2 bg-transparent text-white"
            />
          </div>
          <div className="flex flex-row justify-between gap-4">
            <label htmlFor="positive" className="text-white">
              Positive
            </label>
            <input
              id="positive"
              type="number"
              placeholder={`${positive}`}
              className="w-40 h-8 p-2 rounded-sm border-gray-600 border-2 bg-transparent text-white"
            />
          </div>
          <div className="flex flex-row justify-between gap-4">
            <label htmlFor="negative" className="text-white">
              Negative
            </label>
            <input
              id="negative"
              type="number"
              placeholder={`${negative}`}
              className="w-40 h-8 p-2 rounded-sm border-gray-600 border-2 bg-transparent text-white"
            />
          </div>
          <div className="flex flex-row justify-between gap-4">
            <label htmlFor="comments" className="text-white">
              Comments
            </label>
            <input
              id="comments"
              type="number"
              placeholder={`${comments}`}
              className="w-40 h-8 p-2 rounded-sm border-gray-600 border-2 bg-transparent text-white"
            />
          </div>
        </div>
        <div className="flex mb-6 mr-4 justify-end">
          <button
            onClick={handleCloseModal}
            className="w-40 h-10 bg-blue-700 text-white rounded-md"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
