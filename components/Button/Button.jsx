import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  --button-bg: var(--main-color);
	--button-color: var(--bg-color);
	--button-border-weight: 1px;
	--button-border-color: var(--main-color);
	appearance: none;
	cursor: pointer;
	min-width: 200px;
	height: var(--button-height);
	font-family: var(--main-font);
	font-weight: var(--medium);
	font-size: 14px;
	letter-spacing: 0.05em;
	line-height: 1em;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0 calc(var(--button-height) * .5);
	border-radius: 100px;
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
    --button-bg: var(--main-color);
    --button-color: var(--bg-color);
    --button-border-weight: 1px;
    --button-border-color: var(--main-color);
    filter: brightness(85%);
  }
`

const Button = ({ className, children, onClick }) => (
  <Wrapper className={className} as={'button'} onClick={onClick}>
    {children}
  </Wrapper>
)

export default Button
