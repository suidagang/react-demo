import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.value = "Hello";
    },
  }));
  return <input ref={inputRef} />;
}
// eslint-disable-next-line no-func-assign
FancyInput = forwardRef(FancyInput);

const ImperativeHandleTest = () => {
  let ref = useRef(null);
  useEffect(() => {
    console.log(ref);
    ref.current.focus();
  });
  return (
    <>
      <FancyInput ref={ref} />
    </>
  );
};
export default ImperativeHandleTest;
