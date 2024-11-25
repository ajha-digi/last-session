function App() {
  const handleClick = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const formattedData = await resp.json()
    console.log(formattedData);
    
  };
  return (
    <>
      <h1>Hi</h1>
      <button onClick={handleClick}>Click to fetch data</button>
    </>
  );
}

export default App;
