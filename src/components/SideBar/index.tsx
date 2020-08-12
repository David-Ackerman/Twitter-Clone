import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';


const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter"/>
        <SearchIcon/>
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List 
            title="Talvez você curta" 
            elements={[
              <FollowSuggestion name="Alguem" nickname="@alguem123" />,
              <FollowSuggestion name="Person2" nickname="@secondperson" />,
              <FollowSuggestion name="CrativeGuy" nickname="@spillingcreativity" />     
            ]}
          />
          <List 
            title="Outra lista" 
            elements={[<News />, <News />, <News />]}
          />
          <List 
            title="Outra lista" 
            elements={[<News />, <News />, <News />]}
          />
          <List 
            title="Outra lista" 
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;