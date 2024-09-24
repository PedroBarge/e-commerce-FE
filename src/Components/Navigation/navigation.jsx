import "./nav.css";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#home">
              <img src="src/imgs/th-removebg-preview.png" alt="Logo" />
            </a>
          </li>
          <li>
            <a href="#myAccount">A tua conta</a>
          </li>
          <li>
            <a href="#sell"><button id="btnSell">Vender</button></a>
          </li>
        </ul>
      </nav>
    </>
  );
};
