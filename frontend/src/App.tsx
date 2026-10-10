import { useState, useEffect } from "react";

function App() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch("/api/inicio", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setResponse(data));
  }, []);

  console.log(response);
 
  return (
    <div className="bg-blue-600">hi{response?.message}</div>
  )
}

export default App
