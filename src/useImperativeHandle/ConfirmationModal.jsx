import { useImperativeHandle, useRef, forwardRef } from "react";

const ConfirmationModal = forwardRef(function ConfirmationModal(props, ref) {
  const { isOpen, onClose } = props;

  // create refs
  const closeRef = useRef(null);
  const confirmRef = useRef(null);
  const denyRef = useRef(null);
  // useImperativeHandle(ref, createHandle, dependencies?)
  useImperativeHandle(
    ref,
    () => {
      return {
        focusCloseBtn: () => closeRef.current.focus(),
        focusConfirmBtn: () => confirmRef.current.focus(),
        focusDenyBtn: () => denyRef.current.focus(),
      };
    },
  );

  if (!isOpen) return null;

  return (
    <div
      className="modal border-2 w-[60%] max-w-[450px] mx-auto relative"
      ref={ref}
    >
      <button
        className="close-btn absolute top-2 right-5 text-slate-400 focus:border-2 focus:border-black"
        ref={closeRef}
        onClick={onClose}
      >
        X
      </button>
      <div className="modal-header">
        <h1 className="my-4 text-2xl tracking-wider">Title</h1>
      </div>
      <div className="modal-body my-6">Do you confirm?</div>
      <div className="modal-footer mb-4 space-x-5">
        <button
          className="confirm-btn py-2 px-4 border-2 bg-blue-200 border-blue-400 rounded active:scale-95 focus:border-2 focus:border-black"
          ref={confirmRef}
          onClick={onClose}
        >
          Yes
        </button>
        <button
          className="deny-btn py-2 px-4 border-2 bg-red-200 border-red-300 rounded active:scale-95 focus:border-2 focus:border-black"
          ref={denyRef}
          onClick={onClose}
        >
          No
        </button>
      </div>
    </div>
  );
});

export default ConfirmationModal;
