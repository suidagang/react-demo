// ! 方法一  （推荐）
const App = () => {
  useEffect(() => {
    (async function getDatas() {
      await getData();
    })();
  }, []);
  return <div></div>;
};

// 方法二
useEffect(() => {
  const getDatas = async () => {
    const data = await getData();
    setData(data);
  };
  getDatas();
}, []);
