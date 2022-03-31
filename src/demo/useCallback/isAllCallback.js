const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);

const handleClickButton1 = () => {
  setCount1(count1 + 1);
};
const handleClickButton2 = useCallback(() => {
  setCount2(count2 + 1);
}, [count2]);

return (
  <>
    <button onClick={handleClickButton1}>button1</button>
    <button onClick={handleClickButton2}>button2</button>
  </>
);
