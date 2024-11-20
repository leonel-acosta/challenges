import Card from "./components/Card";
import "./App.css";


export default function App() {
  const fruits = [ 
    {
      name: "Banana",
      id: "001",
      type: "Plant berry",
      color: "yellow",
      icon: "🍌"
    },
    {
      name: "Apple",
      id: "002",
      type: "Drupe",
      color: "red",
      icon: "🍎" 
    }, 
    {
      name: "Orange",
      id: "003",
      type: "Citric",
      color: "orange",
      icon: "🍊" 
    },
    {
      name: "Peach",
      id: "004",
      type: "Stone Fruit",
      color: "pink",
      icon: "🍑" 
    },
    {
      name: "Watermelon",
      id: "005",
      type: "Pepo Berry",
      color: "green",
      icon: "🍉" 
    }
  ];

  return (
    <div className="app">
      <ul>
        {fruits.map((fruit)=>(
            <Card key= {fruit.id} name={fruit.name} color={fruit.color} type={fruit.type} icon={fruit.icon} />
        ))}
      </ul>
    </div>
  );
}
