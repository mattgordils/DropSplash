import React, { useState } from 'react'
import styled from '@emotion/styled'
import { MdAdd, MdClose, MdNotes, MdTitle, MdImage } from 'react-icons/md'
import Button from 'components/Button'

const Wrapper = styled.div``

const MenuPanel = styled.div`
  background: var(--bg-color);
  border-radius: var(--base-border-radius);
  box-shadow: 0 8px 16px rgba(0, 0, 0, .2);
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  width: 200px;
  margin-left: -100px;
  button {
    &:first-of-type {
      border-radius: var(--base-border-radius) var(--base-border-radius) 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 var(--base-border-radius) var(--base-border-radius);
    }
    border-radius: 0;
    background: transparent;
    color: var(--light-text-color);
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border: none;
    &:hover {
      color: var(--text-color);
      background: var(--light-grey);
    }
  }
`

const AddContentActions = ({ className, addContent, addBetween }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const addContentAndClose = type => {
    addContent(type)
    setMenuOpen(false)
  }
  return (
    <Wrapper className={'pt-8 ' + className}>
      <div className='relative'>
        <Button size={'medium'} shape='circle' icon={menuOpen ? <MdClose size='24px' /> : <MdAdd size='24px' />} onClick={toggleMenu}/>
        {menuOpen && (
          <MenuPanel>
            <button onClick={() => addContentAndClose('headline')}><div className='flex gap-x-2 items-center'><MdTitle size='18px'/> Headline</div><MdAdd size='18px'/></button>
            <button onClick={() => addContentAndClose('text')}><div className='flex gap-x-2 items-center'><MdNotes size='18px'/> Text</div><MdAdd size='18px'/></button>
            <button onClick={() => addContentAndClose('image')}><div className='flex gap-x-2 items-center'><MdImage size='18px'/> Image</div><MdAdd size='18px'/></button>
          </MenuPanel>
        )}
      </div>
    </Wrapper>
  )
}

export default AddContentActions
