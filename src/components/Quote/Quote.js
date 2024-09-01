import React from 'react';
import { useQuoteQuery } from '../../hooks/useQuoteQuery';
import { Wrapper, Content } from './Quote.styles';
import QuoteImg from '../../images/quote.svg';

const Quote = () => {
    const data = useQuoteQuery();

    const heading = data.wpPage.ACF_HomePage.citat1Text;
    const author = data.wpPage.ACF_HomePage.citat1Author;

  return (
    <Wrapper>
        <Content>
            <img src={QuoteImg} alt="quotation marks" />
            <h6>{heading}</h6>
            <p>{author}</p>
        </Content>
    </Wrapper>
  )
}

export default Quote