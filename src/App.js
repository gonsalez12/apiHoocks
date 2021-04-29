import React, {useEffect, useState} from 'react';
import './style.css'


//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutro] = useState([]);

  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        
        setNutro(json);
      
      })
    }

    loadApi();

  },[]);


  return (
    <div className="container">
      <header>
          <strong>React nutri</strong>
      </header>

      {nutri.map((item)=>{
            return(

                <article key={item.id} className="post">
                    <strong className="titulo"> {item.titulo} </strong>
                    <img src={item.capa} className="capa" />
                    <p className="subtitulo">{item.subtitulo}</p>
                    <a className="botao" href="#">Acessar</a>
                </article>
            );
        })}
        
    </div>
  );
}

export default App;
