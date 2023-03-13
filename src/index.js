import { createRoot } from "react-dom/client";//trazer do outro arquivo/biblioteca algum função ou variável
import { Titulo } from "./components/Titulo";
import { Mensagem } from "./components/Mensagem";
import './styles.css';

const rootElement = document.getElementById('root'); //pegando o id root da div la no index.html 
const root = createRoot(rootElement) //a div root será a base da aplicação

//inserimos o conteudo da pagina
root.render(
<div>
    <Titulo></Titulo>
    <Mensagem></Mensagem>
</div>
);