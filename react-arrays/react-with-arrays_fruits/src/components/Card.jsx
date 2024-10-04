import "./Card.css";

export default function Card({ name, id, type, icon, color }) {
  return (
  <div className={`card card--${color}`}>
    <span>{icon}</span>
    <h3><strong>{name}</strong></h3>
    <p>Product id: {id}</p>
    <p>Fruit type: {type}</p>
    <p>Color: {color}</p>
  </div>)
}
