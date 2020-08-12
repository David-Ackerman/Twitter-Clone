import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>David dos Santos</h1>
        <h2>@DavidAckerman</h2>

        <p>
          Studant at <a href="https://unip.br">@Unip</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            São Paulo,
            Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 19 de maio de 1999
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>80</strong>
          </span>
          <span>
            <strong>93</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;