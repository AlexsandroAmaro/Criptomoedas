
import styles from './notfound.module.css'
import { useNavigate } from 'react-router-dom'


export function Notfound() {

    const Navigate = useNavigate();
    function handleClick(){
        Navigate("/");
        return;
    }
  

    return (
      
        <div className= {styles.container}>
         <h1 className={styles.texto}>Erro 404, esta página não existe </h1>

         <button onClick={handleClick} className={styles.button} >
            Clique aqui para voltar ao Home
         </button>
        </div>
        
    )
  }
  