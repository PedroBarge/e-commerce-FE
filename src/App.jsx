import UploadProductImage from "./Components/UploadProductImage";
import ImageListComponent from "./Components/ImageListComponent";

import { Login } from "./pages/home";
import { ButtonEnter } from "./Components/Button/buttonEnter";
import "./app.css";

function App() {
  return (
    <>
      <div>
        <Login />
      </div>
      <div className="enter">
        <ButtonEnter />
      </div>
    </>
  );
}

export default App;
