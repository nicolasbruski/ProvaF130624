import React, { useState, useEffect } from 'react';

const Livro = ({ livroId }) => {
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const data = await fetchLivroPorId(livroId);
        setLivro(data);
      } catch (error) {
        console.error('Erro ao buscar livro:', error);
      }
    };

    fetchLivro();
  }, [livroId]);

  if (!livro) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>{livro.volumeInfo.title}</h2>
      <p>Autor: {livro.volumeInfo.authors.join(', ')}</p>
      <p>Descrição: {livro.volumeInfo.description}</p>
      {livro.volumeInfo.imageLinks && (
        <img src={livro.volumeInfo.imageLinks.thumbnail} alt="Capa do Livro" />
      )}
    </div>
  );
};

async function fetchLivroPorId(livroId) {
  const apiKey = 'SUA_CHAVE_DE_API_AQUI'; // Substitua pela sua chave de API
  const url = `https://www.googleapis.com/books/v1/volumes/${livroId}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar livro');
    }
    const data = await response.json();
    console.log('Dados do livro:', data); // Verifique os dados recebidos no console
    return data;
  } catch (error) {
    console.error('Erro ao buscar livro:', error);
    return null; // Retorne null ou um valor padrão para evitar quebrar a renderização
  }
}

export default Livro;