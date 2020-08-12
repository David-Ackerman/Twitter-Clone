import React from 'react';

import { 
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  RocketseatIcon,
 } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted >
      <RocketseatIcon />
      Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>12 de agosto</time>

          </Header>
          <Description>Foguete não tem ré</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              20
            </Status>
            <Status>
              <RetweetIcon />
              67
            </Status>
            <Status>
              <LikeIcon />
              345
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;