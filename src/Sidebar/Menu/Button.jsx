import React from 'react';
import styled from 'styled-components';
import c from '../../styled/config';
import ARROW from './icon-arrow.svg';

const Wrapper = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  padding-right: 2.75rem;
  margin-bottom: 2.4rem;
  font-family: ${c.fontBody.avenir};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.3rem;
  text-transform: uppercase;
  transition: ${c.transition};
  color: ${c.colors.sidebarGrey};
  ${props => props.isOpen && `
    color: ${c.colors.sidebarLight};
  `}
`;

const Arrow = styled.span`
  position: absolute;
  display: block;
  content: "";
  top: .5rem;
  right: 0;
  height: 1.3rem;
  width: 1.3rem;
  border-right: .4rem solid ${c.colors.sidebarGrey};
  border-bottom: .4rem solid ${c.colors.sidebarGrey};
  transform: rotate(45deg);

  ${props => props.isOpen && `
    top: 1.2rem;
    transform: rotate(225deg);
    border-right: .4rem solid ${c.colors.sidebarLight};
    border-bottom: .4rem solid ${c.colors.sidebarLight};
  `}
  transition: ${c.transition};
`;

export default ({ onChange, isOpen, Title }) => (
  <Wrapper onClick={onChange} isOpen={isOpen}>
    {Title}
    <Arrow src={ARROW} isOpen={isOpen} />
  </Wrapper>
);
