import { FiPlus,FiSearch } from "react-icons/fi";
import {Container, Brand, Menu, Search, Content, NewNote} from "./style"

import { Header } from './../../components/header';
import { Input } from "./../../components/input";
import { ButtonText } from "./../../components/buttonText";


export function Home (){
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive/>
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo Titulo" icon={FiSearch}/>
      </Search>

      <Content></Content>

      <NewNote>
        <FiPlus/>
        Criar Nota 
        
      </NewNote>
    </Container>
  );
}
