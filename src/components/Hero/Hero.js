import React from 'react';
import { getImage } from 'gatsby'
import { useHeroQuery } from '../../hooks/useHeroQuery'
import { Wrapper, HeaderWrapper, StyledImg } from './Hero.styles'

const Hero = () => {
    const data = useHeroQuery();
    console.log(data);
  return (
    <Wrapper>
        Test
    </Wrapper>
  )
}

export default Hero