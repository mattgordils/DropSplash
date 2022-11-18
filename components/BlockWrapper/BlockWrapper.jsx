import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  &:after {
    content: '';
    position: absolute;
    top: -6px;
    bottom: -6px;
    left: -6px;
    right: -6px;
    border-radius: 6px;
    border: 2px solid currentcolor;
    opacity: 0;
    pointer-events: none;
  }
  &:hover {
    .action-menu {
      display: block;
    }
  }
  ${ ({ focused }) => focused ? `
    &:after {
      opacity: 1;
      border-color: var(--main-color);
    }
    .action-menu {
      display: block;
    }
  ` : `
    &:hover {
      &:after {
        opacity: .15;
      }
    }
  ` }
`

const ActionMenu = styled.div`
  position: absolute;
  left: 100%;
  padding-left: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: none;
`

const BlockWrapper = ({ className, children, removeBlock, focused }) => (
  <Wrapper className={className} focused={focused}>
    {children}
    <ActionMenu className='action-menu' >
      <button onClick={removeBlock}>Delete</button>
    </ActionMenu>
  </Wrapper>
)

export default BlockWrapper
