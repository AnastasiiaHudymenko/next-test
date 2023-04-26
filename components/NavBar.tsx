import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

export const NavBar: FC = () => {
  return (
    <Nav>
      <div>
        <span>Logo</span>
      </div>
      <WrapLink>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contacts">Contacts</Link>
      </WrapLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
`;

const WrapLink = styled.div`
  display: flex;
  gap: 20px;
`;
