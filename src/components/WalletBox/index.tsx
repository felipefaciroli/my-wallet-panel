import React from 'react';
import CountUp from 'react-countup';

import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import {
  Container
} from './styles';

interface IWalletBoxProps {
  title: string,
  amount: number,
  footerLabel: string,
  icon: 'dolar' | 'arrowUp' | 'arrowDown',
  color: string
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color
}) => {
  const iconSelected = () => {
    switch (icon) {
      case 'dolar':
        return dolarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
      default:
        return undefined;
    }
  }

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <strong>R$ </strong>
        <CountUp
          end={amount}
          duration={0.50}
          separator='.'
          decimal=','
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      {iconSelected() && <img src={iconSelected()} alt={title} />}
    </Container>
  )
}

export default WalletBox;