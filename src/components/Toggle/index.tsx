import React, { useState } from 'react';

import {
  Container,
  ToggleLabel,
  ToggleSelector
} from './styles';

const Toggle: React.FC = () => {
  const [theme, setTheme] = useState(false);

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={theme}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => setTheme(!theme)}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}

export default Toggle;