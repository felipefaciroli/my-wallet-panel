import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import {
  Container
} from './styles';

const Dashboard: React.FC = () => {
  const options = [
    { value: 'Felipe', label: 'Rodrigo' },
    { value: 'Ana', label: 'Ana' },
    { value: 'João', label: 'João' }
  ]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor='#f7931b'>
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  )
}

export default Dashboard;