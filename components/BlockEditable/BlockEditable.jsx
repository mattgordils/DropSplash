import React, { useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import BlockWrapper from 'components/BlockWrapper'
import ContentEditable from 'react-contenteditable'

const CMD_KEY = '/'

const Wrapper = styled.div`
  margin: 0 0 10px;
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

const BlockHeadline = ({ className, position, tag = 'p', html, id, removeBlock, updateBlock, placeholder }) => {
  const contentEditable = useRef()
  const [blockHtml, setBlockHtml] = useState('')
  const [isTyping, setIsTyping] = useState({})
  const [focused, setFocused] = useState({})

  const handleChange = event => {
    setBlockHtml(event.target.value);
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
    if (blockHtml) {
      setFocused(false)
    } else {
      setFocused(true)
    }
    if (!hasPlaceholder) {
      setIsTyping(false)
    }
  }

  const handleFocus = event => {
    // Show placeholder if block is still the only one and empty
    setFocused(true)
    console.log(event)
  }

  useEffect(() => {
    addPlaceholder()
    contentEditable.current.focus()
    handleFocus(true)
  }, [])

  const hasContent = blockHtml !== '' && blockHtml !== undefined

  console.log(blockHtml)

  return (
    <Wrapper className={className} hasContent={hasContent}>
      <BlockWrapper removeBlock={() => removeBlock(id)} focused={focused}>
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
        />
        {placeholder && !hasContent && (
          <Placeholder as={tag}>{placeholder}</Placeholder>
        )}
      </BlockWrapper>
    </Wrapper>
  )
}

export default BlockHeadline
