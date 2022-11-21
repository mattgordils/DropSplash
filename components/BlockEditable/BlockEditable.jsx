import React, { useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import BlockWrapper from 'components/BlockWrapper'
import ContentEditable from 'react-contenteditable'

const CMD_KEY = '/'

const Wrapper = styled.div`
  padding: 10px 0;
`

const Placeholder = styled.div`
  left: 0;
  right: 0;
  top: 0;
  margin: 0;
  opacity: .3;
  pointer-events: none;
  vertical-align: top;
  ${ ({ hasContent }) => hasContent ? `` : `` }
`

const Content = styled(ContentEditable)`
  outline: none;
  vertical-align: top;
  margin: 0;
  ${ ({ hasContent }) => hasContent ? `` : `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  ` }
`

const BlockHeadline = ({
  className,
  position,
  tag = 'p',
  html = '',
  id,
  removeBlock,
  updateBlock,
  placeholder,
  dragProps,
  isDragging,
  type,
  settings
}) => {
  const contentEditable = useRef()
  const [blockHtml, setBlockHtml] = useState('')
  const [isTyping, setIsTyping] = useState({})
  const [focused, setFocused] = useState()
  const [editorStyles, setEditorStyles] = useState()

  const handleChange = event => {
    setBlockHtml(event.target.value);
    updateBlock('html', event.target.value, id)
  }

  // Show a placeholder for blank pages
  const addPlaceholder = content => {
    if (blockHtml === placeholder || blockHtml == '' || !html) {
      return true
    } else {
      return false
    }
  }

  const handleBlur = event => {
    // Show placeholder if block is still the only one and empty
    const hasPlaceholder = addPlaceholder(blockHtml)
    setFocused(false)
    if (!hasPlaceholder) {
      setIsTyping(false)
    }
  }

  const handleFocus = event => {
    // Show placeholder if block is still the only one and empty
    setFocused(true)
  }

  useEffect(() => {
    addPlaceholder()
    contentEditable.current.focus()
    handleFocus(true)
  }, [])

  const hasContent = blockHtml !== '' && blockHtml !== undefined

  return (
    <Wrapper className={className} hasContent={hasContent}>
      <BlockWrapper
        removeBlock={() => removeBlock(id)}
        focused={focused}
        dragProps={dragProps}
        isDragging={isDragging}
        type={type}
        updateBlock={updateBlock}
        blockId={id}
      >
        <Content
          innerRef={contentEditable}
          data-position={position}
          data-tag={tag}
          html={blockHtml}
          spellCheck={false}
          onChange={handleChange}
          hasContent={hasContent}
          onFocus={handleFocus}
          onBlur={handleBlur}
          // onKeyDown={handleKeyDown}
          // onKeyUp={handleKeyUp}
          // onMouseUp={handleMouseUp}
          tagName={tag}
          style={{ fontFamily: settings?.fontFamily }}
        />
        {placeholder && !hasContent && (
          <Placeholder
            as={tag}
            style={{ fontFamily: settings?.fontFamily }}
          >{placeholder}</Placeholder>
        )}
      </BlockWrapper>
    </Wrapper>
  )
}

export default BlockHeadline
