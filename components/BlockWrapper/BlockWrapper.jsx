import React from 'react'
import styled from '@emotion/styled'
import DragIcon from 'assets/drag-icon.svg'
import { MdDelete } from 'react-icons/md'

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
    transition: border 300ms ease-in-out,
                opacity 300ms ease-in-out;
  }
  &:hover {
    .action-menu,
    .hover-actions {
      opacity: 1;
      visibility: visible;
    }
  }
  ${ ({ focused }) => focused ? `
    &:after {
      opacity: 1;
      border-color: var(--main-color);
    }
    .action-menu,
    .hover-actions {
      opacity: 1;
      visibility: visible;
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

const HoverActions = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  padding-left: 10px;
  align-items: center;
  justify-conent: flex-start;
  // visibility: hidden;
  transition: opacity 300ms ease-in-out,
              visibility 300ms ease-in-out;
`

const DragHandle = styled.button`
  appearance: none;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  min-width: 0;
  height: auto;
  padding: 8px;
  background: transparent;
  color: var(--text-color);
  opacity: .6;
  :hover {
    opacity: 1;
    background: var(--light-grey);
  }
  svg {
    dispaly: block;
    * {
      fill: currentcolor;
    }
  }
`

const DeleteButton = styled.button`
  appearance: none;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  min-width: 0;
  height: auto;
  padding: 8px;
  background: transparent;
  color: var(--text-color);
  opacity: .6;
  :hover {
    opacity: 1;
    color: var(--alert);
  }
  svg {
    dispaly: block;
  }
`

const BlockWrapper = ({ className, children, removeBlock, focused, dragProps, isDragging }) => (
  <Wrapper className={className} focused={focused || isDragging}>
    {children}
    <HoverActions className='hover-actions'>
      <DragHandle {...dragProps}><DragIcon/></DragHandle>
      <DeleteButton onClick={removeBlock}><MdDelete size='20px'/></DeleteButton>
    </HoverActions>
  </Wrapper>
)

export default BlockWrapper
