import { forwardRef, useImperativeHandle } from "react";

const CustomInput = forwardRef(function CustomInput(props, ref) {
  useImperativeHandle(ref, () => {
    return { alertHi: () => alert("hi!") };
  }, []);

  return (
    <input
      ref={ref}
      {...props}
      className="bg-red-300 pt-2 px-2 mb-4 border-b-2 border-slate-200"
    />
  );
});

export default CustomInput;
