import React from 'react';

import * as S from './styles';

const Button = ({onPress, Title, primary}) => {
  return (
    <S.Button primary={primary} onPress={onPress}>
      <S.ButtonText primary={primary}>{Title}</S.ButtonText>
    </S.Button>
  );
};

export default Button;
