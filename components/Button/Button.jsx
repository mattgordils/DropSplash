import React from 'react'
import styled from '@emotion/styled'

const buttonSizes = {
  small: '30px',
  tiny: '26px'
}

const Wrapper = styled.div`
  ${ ({ size }) => size && size !== 'medium' && size !== 'default' ? `
    --button-height: ${ buttonSizes[size] };
  ` : `` }
  --button-bg: var(--main-color);
	--button-color: var(--bg-color);
	--button-border-weight: 1px;
	--button-border-color: var(--button-bg);
	appearance: none;
	cursor: pointer;
	height: var(--button-height);
	font-family: var(--main-font);
	font-weight: var(--bold);
	font-size: 14px;
	letter-spacing: 0.05em;
	line-height: 1em;
	display: inline-flex;
  vertical-align: top;
	align-items: center;
	justify-content: center;
	background: var(--button-bg);
	color: var(--button-color);
	border: var(--button-border-weight) solid var(--button-border-color);
	transition: background var(--md-speed) ease-in-out,
              filter var(--md-speed) ease-in-out,
							color var(--md-speed) ease-in-out,
							border var(--md-speed) ease-in-out,
							box-shadow var(--md-speed) ease-in-out,
							transform var(--md-speed) ease-in-out,
							opacity var(--md-speed) ease-in-out;
  &:hover {
    --button-bg: var(--main-color-darken);
    --button-color: var(--bg-color);
    --button-border-weight: 1px;
    --button-border-color: var(--button-bg);
  }
  ${ ({ setTheme }) => setTheme === 'transparent' ? `
    --button-bg: transparent;
    --button-color: var(--light-text-color);
    --button-border-weight: 1px;
    --button-border-color: transparent;
    &:hover {
      --button-bg: transparent;
      --button-color: var(--text-color);
      --button-border-weight: 1px;
      --button-border-color: transparent;
    }
  ` : `` }
  ${ ({ shape, iconPosition, icon }) => shape === 'circle' || shape === 'square' ? `
    padding: 0;
    min-width: var(--button-height);
    width: var(--button-height);
  ` : `
    padding: 0 calc(var(--button-height) * .5);
    ${ iconPosition === 'right' ? `
      > svg {
        margin-left: .5em;
      }
    ` : `
      > svg {
        margin-right: .5em;
      }
    ` }
  ` }
  ${ ({ shape }) => shape === 'circle' ? `
    border-radius: 50%;
  ` : `
    border-radius: 100px;
  ` }
`

const Button = ({
  className,
  children,
  onClick,
  shape,
  size,
  icon,
  iconPosition,
  setTheme,
  ...rest
}) => (
  <Wrapper {...rest} setTheme={setTheme} iconPosition={iconPosition} className={className} as={'button'} onClick={onClick} shape={shape} size={size}>
    {iconPosition !== 'right' && icon}{children}{iconPosition === 'right' && icon}
  </Wrapper>
)

export default Button
