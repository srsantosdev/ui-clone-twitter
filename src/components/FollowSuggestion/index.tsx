import React from 'react';

import { Container, Avatar, UserInfo, FollowButton } from './styles';

interface Props {
  name: string;
  username: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, username }) => {
  return (
    <Container>
      <div>
        <Avatar />

        <UserInfo>
          <strong>{name}</strong>
          <span>{username}</span>
        </UserInfo>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
