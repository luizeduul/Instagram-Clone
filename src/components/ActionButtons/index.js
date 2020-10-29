import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, LeftButtonsView, RightButtonsView, Button } from './styles';

const ActionButtons = () => {
  return (
    <Container>
      <LeftButtonsView>
        <Button>
          <Feather name="heart" size={30} />
        </Button>
        <Button>
          <Feather name="message-circle" size={30} />
        </Button>
        <Button>
          <Feather name="send" size={30} />
        </Button>
      </LeftButtonsView>
      <RightButtonsView>
        <Button>
          <Feather name="bookmark" size={30} />
        </Button>
      </RightButtonsView>
    </Container>
  );
};

export default ActionButtons;
