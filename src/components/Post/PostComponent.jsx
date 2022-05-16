import React from "react";
import styled from "styled-components";
import { AddPost } from "./AddPost/AddPost";
import ShowPost from "./ShowPost/ShowPost";
import EnterPost from "./ShowPost/EnterPost";
import Showfirebase from "./ShowPost/showfirebase";

function PostComponent() {
  return (
    <Container>
      <AddPost />
      {/* <EnterPost /> */}
      {/* <Showfirebase/> */}
      <ShowPost />
    </Container>
  );
}

const Container = styled.div`
  grid-area: postcomponent;
`;

export default PostComponent;
