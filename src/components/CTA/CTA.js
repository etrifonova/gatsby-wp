import React from "react"
import { Link } from "gatsby"
import {
  StyledImg,
  CtaImage,
  CtaImageText,
  CtaImageTextWrapper,
} from "./Cta.styles"

const Cta = ({ image, link, text }) => (
  <CtaImage>
    <StyledImg image={image} alt="Cta Image" />
    <Link to={link}>
      <CtaImageTextWrapper>
        <CtaImageText>{text}</CtaImageText>
      </CtaImageTextWrapper>
    </Link>
  </CtaImage>
)

export default Cta
