import React from 'react';

// Styles and Images
import * as S from './styles';
import {grass} from '../../assets/images';

const Badges = ({type}) => {
  switch (type) {
    case 'grass':
      return <S.BadgeImage source={grass} />;
  }
};

export default Badges;
