import "./Person.css";

export default function Person({ name, img, status }) {
  return (
    <li
      className={
        status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"
      }
    >
      <figure>
        <figcaption>{name}</figcaption>
        <img src={img} alt=""></img>
      </figure>
    </li>
  );
}
