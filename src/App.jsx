import useHttps from "./hooks/use-http";

function App() {
  const {getRequest, response} = useHttps();
  console.log(response?.data);
  
  return (
    <>
      <h1>Hi</h1>
      <button onClick={()=>getRequest("/todos/12")}>Click to fetch data</button>
    </>
  );
}

export default App;
