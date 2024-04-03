import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-gray-800 p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="Mayur Dev" btnText="Click me"/>
      <Card username="Yom"/>
    </>
  );
}

export default App;
