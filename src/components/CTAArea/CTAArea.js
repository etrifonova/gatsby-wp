import React from 'react';
import { useCTAAreaQuery } from '../../hooks/useCTAAreaQuery';
import { Wrapper } from './CtaArea.styles';
import Cta from '../Cta/Cta';


const CtaArea = () => {
    const { cta } = useCTAAreaQuery();
    
  return (
    <Wrapper>
        {new Array(3).fill("").map((element, i) => (
            <Cta
            key={i}
            image={
                cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp.gatsbyImageData
            }
            link={cta.ACF_HomePage[`cta${i + 1}Link`]}
            text={cta.ACF_HomePage[`cta${i + 1}Text`]}
            />
        ))}
    </Wrapper>
  )
}

export default CtaArea