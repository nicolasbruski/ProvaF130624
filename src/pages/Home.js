import React from 'react';
import Livro from '../components/Livro';
import '../Home.css'; 

function App() {
  const imagem1 = 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._AC_UF1000,1000_QL80_.jpg';
  const imagem2 = 'https://miro.medium.com/v2/resize:fit:772/0*0cub3EmlfaJGaw9b.jpeg';
  const imagem3 = 'https://m.media-amazon.com/images/I/91uoaAYJkrL._AC_UF1000,1000_QL80_.jpg';
  const imagem4 = 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575226568.jpg';

  return (
    <div className="App">
      <div className='Livro'>
        <div className='livro-unidade'>
          <div className='imagem'>
          <img className='imagem-livro' src={imagem1} alt="Imagem"/>
          </div>
          <div className='Descricao'>
            <Livro livroId={0} />
          </div>
        </div>
        
        <div className='livro-unidade'>
          <div className='imagem'>
          <img className='imagem-livro' src={imagem2} alt="Imagem"/>
          </div>
          <div className='Descricao'>
            <Livro livroId={1} />
          </div>
        </div>

        <div className='livro-unidade'>
          <div className='imagem'>
          <img className='imagem-livro' src={imagem3} alt="Imagem"/>
          </div>
          <div className='Descricao'>
            <Livro livroId={2} />
          </div>
        </div>

        <div className='livro-unidade'>
          <div className='imagem'>
          <img className='imagem-livro' src={imagem4} alt="Imagem"/>
          </div>
          <div className='Descricao'>
            <Livro livroId={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;