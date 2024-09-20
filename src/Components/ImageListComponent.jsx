import { useEffect, useState } from "react";

const ImageListComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          {product.linkPhoto && (
            <img
              src={`http://localhost:8080/${product.linkPhoto}`}
              alt={product.name}
              width="200"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageListComponent;
