import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Samuel Ramos</h1>
        <h2>@srsantosdev</h2>

        <p>Full Stack Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Bahia, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 17 de abril de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>779</strong>
          </span>
          <span>
            <strong>1786 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
