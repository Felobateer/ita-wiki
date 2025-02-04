import { FC } from 'react'
import styled from 'styled-components'
import { colors, dimensions, device } from '../../styles'

type HamburgerMenuProps = {
  open: boolean
  onClick: () => void
}

const StyledBurger = styled.button<HamburgerMenuProps>`
  position: absolute;
  top: 45%;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.8rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ open }) => (open ? '30' : '10')};
  margin-left: ${dimensions.spacing.xl};
  &:focus {
    outline: none;
  }

  div {
    height: 0.2rem;
    background-color: ${colors.black.black1};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    &:first-child {
      width: ${({ open }) => (open ? '2rem' : '1.5rem')};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      width: 2rem;
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:last-child {
      width: ${({ open }) => (open ? '2rem' : '1.5rem')};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media ${device.Tablet} {
    display: none;
  }
  @media only screen and (min-width: 469px) {
    top: 3%;
  }
`

const HamburgerMenu: FC<HamburgerMenuProps> = ({ open, onClick }) => (
  <StyledBurger open={open} onClick={onClick} data-testid="hamburger-menu">
    <div data-testid="hamburger-menu-item" />
    <div data-testid="hamburger-menu-item" />
    <div data-testid="hamburger-menu-item" />
  </StyledBurger>
)
export default HamburgerMenu
