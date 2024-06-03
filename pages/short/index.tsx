import { Container, ShortsContainer } from "./style";
import { UserContext } from "../../context/userContext";
import React, { useState, useContext, useEffect } from "react";


function Shorts() {

    const {openMenu, setOpenMenu} = useContext(UserContext);

  return (
    <ShortsContainer>
      <Container openMenu={openMenu}>
        <h1>Página em construção - Shorts</h1>
      </Container>
    </ShortsContainer>
  )
}

export default Shorts;