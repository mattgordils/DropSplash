import React, { useState } from 'react'
import styled from '@emotion/styled'
import { MdAdd, MdClose, MdNotes, MdTitle, MdImage } from 'react-icons/md'
import Card from 'components/Card'
import Button from 'components/Button'

const Wrapper = styled.div`
  ${ ({ addBetween }) => addBetween ? `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4px;
    opacity: 0;
    transition: opacity var(--md-speed) ease-in-out;
    position: relative;
    z-index: 3;
    &:hover {
      opacity: 1;
    }
  ` : `
    padding-top: 30px;
  ` }
  ${ ({ menuOpen }) => menuOpen ? `
    position: relative;
    z-index: 6;
  ` : `` }
`

const InnerWrapper = styled.div`
  position: relative;
  ${ ({ addBetween }) => addBetween ? `
    display: flex;
    align-items: center;
    height: 4px;
    width: 100%;
  ` : `` }
`

const AddButton = styled(Button)`
  ${ ({ addBetween }) => addBetween ? `
    margin: 0 4px;
    flex-grow: 0;
    flex-shrink: 0;
  ` : `` }
`

const MenuPanel = styled(Card)`
  ${ ({ visible }) => !visible ? `
    position: absolute;
    margin-left: -100px;
    left: 50%;
  ` : `
    display: inline-block;
    vertical-align: top;
  ` }
  ${ ({ addBetween }) => addBetween ? `
    bottom: calc(100% + 20px);
  ` : `
    bottom: calc(100% + 10px);
  ` }
  width: 200px;
  button {
    text-align: left;
    svg:nth-of-type(2) {
      margin: 0;
    }
    width: 100%;
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

const BetweenBar = styled.div`
  height: 4px;
  background: var(--text-color);
  width: 100%;
  z-index: 1;
  opacity: .2;
  flex-grow: 1;
`

export const ContentMenu = ({ position, addContent, addBetween, setMenuOpen, visible }) => {
  return (
    <MenuPanel addBetween={addBetween} onMouseLeave={() => setMenuOpen && setMenuOpen(false)} visible={visible}>
      <Button onClick={() => addContent('headline', position)} icon={<MdTitle size='18px'/>}>Headline <div className="grow flex justify-end"><MdAdd size='18px'/></div></Button>
      <Button onClick={() => addContent('text', position)} icon={<MdNotes size='18px'/>}>Text <div className="grow flex justify-end"><MdAdd size='18px'/></div></Button>
      <Button onClick={() => addContent('image', position)} icon={<MdImage size='18px'/>}>Image <div className="grow flex justify-end"><MdAdd size='18px'/></div></Button>
    </MenuPanel>
  )
}

const AddContentActions = ({ className, addContent, addBetween, position }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const addContentAndClose = (type, position) => {
    addContent(type, null, null, null, position)
    setMenuOpen(false)
  }
  return (
    <Wrapper className={className} addBetween={addBetween} menuOpen={menuOpen}>
      <InnerWrapper addBetween={addBetween}>
        {addBetween && (<BetweenBar onClick={toggleMenu}/>)}
        <AddButton addBetween={addBetween} size={addBetween ? 'small' : 'medium'} shape='circle' icon={menuOpen ? <MdClose size='24px' /> : <MdAdd size='24px' />} onClick={toggleMenu} />
        {addBetween && (<BetweenBar onClick={toggleMenu}/>)}
        {menuOpen && (
          <ContentMenu position={position} addContent={addContentAndClose} addBetween={addBetween} setMenuOpen={setMenuOpen}/>
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default AddContentActions
