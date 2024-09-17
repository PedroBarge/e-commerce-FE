import React, { useState } from 'react';

const UploadProductImage = () => {
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
    });

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Criar um FormData para enviar dados e arquivo
        const formData = new FormData();
        formData.append('file', file);
        formData.append('product', new Blob([JSON.stringify(product)], {
            type: "application/json"
        }));

        try {
            const response = await fetch('http://localhost:8080/product', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Produto adicionado com sucesso:', result);
            }
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Nome do Produto" 
                value={product.name} 
                onChange={handleInputChange} 
            />
            <textarea 
                name="description" 
                placeholder="Descrição do Produto" 
                value={product.description} 
                onChange={handleInputChange} 
            />
            <input 
                type="text" 
                name="price" 
                placeholder="Preço" 
                value={product.price} 
                onChange={handleInputChange} 
            />
            <input 
                type="text" 
                name="category" 
                placeholder="Categoria" 
                value={product.category} 
                onChange={handleInputChange} 
            />
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Salvar Produto</button>
        </form>
    );
};

export default UploadProductImage;
