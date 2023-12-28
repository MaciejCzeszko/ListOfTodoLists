export function Modal({
  isOpen,
  setIsOpen,
  children,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (!isOpen) return null;

  function handleClose(e: React.MouseEvent) {
    if ((e.target as Element).id === "modal") setIsOpen(false);
  }

  return (
    <div
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        <div className="bg-white p-6 px-8 rounded-md">{children}</div>
      </div>
    </div>
  );
}
