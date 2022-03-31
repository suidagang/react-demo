import React, { useState, useCallback, useRef } from "react";
export default function CallbackComponent() {
  const textRef = useRef("");
  const [text, setText] = useState("");

  const handleSubmit = useCallback(() => {
    console.log(textRef.current);
  }, [textRef]);

  return (
    <form>
      <input
        value={text}
        onChange={(e) => {
          const { value } = e.target;
          setText(value);
          textRef.current = value;
        }}
      />
      <OtherForm onSubmit={handleSubmit} />
    </form>
  );
}

//! 使用 useRef 可以生成一个变量让其在组件每个生命周期内都能访问到，且 handleSubmit 并不会因为 text 的更新而更新，也就不会让 OtherForm 多次渲染。
