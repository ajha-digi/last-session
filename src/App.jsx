function App() {
  const handleClick = async () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.response);
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    xhttp.send();
  };
  return (
    <>
      <h1>Hi</h1>
      <button onClick={handleClick}>Click to fetch data</button>
    </>
  );
}

export default App;
