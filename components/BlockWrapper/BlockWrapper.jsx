import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import DragIcon from 'assets/drag-icon.svg'
import Button from 'components/Button'
import { MdDelete, MdClose } from 'react-icons/md'
import { Resizable } from 're-resizable'
import SettingFontFamily from 'components/SettingFontFamily'
import SettingFontSize from 'components/SettingFontSize'

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  vertical-align: top;
  ${ ({ showBorder }) => showBorder ? `
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
      z-index: 1;
      pointer-events: none;
      transition: border 300ms ease-in-out,
                  opacity 300ms ease-in-out;
    }
  ` : `` }
  &:hover {
    .action-menu,
    .hover-actions,
    .resize-handles {
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
    .hover-actions,
    .resize-handles {
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
  z-index: 2;
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

const DragHandle = styled(Button)`
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
  border-radius: 10px;
  min-width: 0;
  :hover {
    opacity: 1;
    background: var(--light-grey);
  }
  svg {
    margin: 0;
    dispaly: block;
    * {
      fill: currentcolor;
    }
  }
`

const DeleteButton = styled(Button)`
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
    margin: 0;
    dispaly: block;
  }
`

const ResizeHandle = styled(Button)`
  position: absolute;
  right: calc((var(--button-height) * -.5) - 4px);
  top: calc((var(--button-height) * -.5) - 4px);
  z-index: 4;
`

const ResizableItem = styled(Resizable)`
  position: relative;
  z-index: 3;
  .resize-handles {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    > div {
      transition: opacity 300ms ease-in-out,
                  border 300ms ease-in-out;
      &:nth-of-type(2) {
        border-right: 4px solid var(--text-color);
        opacity: .2;
        right: -7px !important;
      }
      &:nth-of-type(4) {
        border-left: 4px solid var(--text-color);
        opacity: .2;
        left: -7px !important;
      }
      &:nth-of-type(2),
      &:nth-of-type(4) {
        &:hover,
        &:active {
          opacity: 1;
          border-color: var(--main-color);
        }
      }
    }
  }
`

const SettingsPanel = styled.div`
  background: var(--bg-color);
  border-radius: var(--base-border-radius);
  box-shadow: 0 8px 16px rgba(0, 0, 0, .2);
  width: 200px;
  min-height: 60px;
  left: 100%;
  top: 0;
`

const BlockWrapper = ({
  className,
  children,
  removeBlock,
  focused,
  dragProps,
  isDragging,
  setWidth,
  maxWidth,
  type,
  blockId,
  updateBlock,
  settings
}) => {
  const blockContent = useRef()
  const [resizing, setResizing] = useState(false)
  const [selectedFont, setSelectedFont] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  
  const toggleSettingsPanel = () => {
    console.log('yeys')
    setSettingsOpen(!settingsOpen)
  }

  const setFontFamily = fontStack => {
    updateBlock('settings', { fontFamily: fontStack }, blockId)
  }

  const setFontSize = event => {
    console.log(event)
    updateBlock('settings', { fontSize: event }, blockId)
  }

  return (
    <Wrapper className={className} focused={focused || isDragging} showBorder={!setWidth}>
      {setWidth ? (
        <ResizableItem
          ref={blockContent}
          lockAspectRatio
          defaultSize={{ width: maxWidth }}
          handleWrapperClass='resize-handles'
        >
          {children}
        </ResizableItem>
      ) : (
        <div ref={blockContent}>
          {children}
        </div>
      )}
      <HoverActions className='hover-actions'>
        {settingsOpen ? (
          <SettingsPanel onMouseLeave={() => setSettingsOpen(false)}>
            <div className="flex justify-between items-center gap-x-3 py-3 pl-3 border-b border-hr-color">
              <span class='h6'>{type} Settings</span>
              <Button
                onClick={() => setSettingsOpen(false)}
                icon={<MdClose size='18px' />}
                size='tiny'
                shape='circle'
              />
            </div>
            <div>
              <SettingFontFamily setFontFamily={setFontFamily}/>
              <SettingFontSize setFontSize={setFontSize}/>
            </div>
            <div className="border-t border-hr-color p-3">
              <Button icon={<MdDelete size='20px'/>} onClick={removeBlock}>Delete</Button>
            </div>
          </SettingsPanel>
        ) : (
          <>
            <DragHandle {...dragProps} onClick={toggleSettingsPanel} icon={<DragIcon/>}></DragHandle>
            <DeleteButton onClick={removeBlock} icon={<MdDelete size='20px'/>}/>
          </>
        )}
      </HoverActions>
    </Wrapper>
  )
}

export default BlockWrapper
