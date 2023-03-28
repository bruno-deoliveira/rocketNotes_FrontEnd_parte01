import { RiShutDownLine } from "react-icons/ri";

import { Container, Profile, Logout } from "./style";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/bruno-deoliveira.png"
          alt="foto do usuário"
        />

        <div>
          <span> Bem-vindo </span>
          <strong> Bruno Oliveira </strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
