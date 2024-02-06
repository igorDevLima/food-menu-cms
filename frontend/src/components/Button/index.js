import "./index.css";

const Button = ({ text, url }) => {
  return (
    <a href={url}>
      <button className="button">{text}</button>
    </a>
  );
};

export default Button;
