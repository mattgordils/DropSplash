import React, { useState } from 'react'
import styled from '@emotion/styled'
import BlockWrapper from 'components/BlockWrapper'

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const EmptyWrapper = styled.div`
  border-radius: 10px;
  background: #eee;
  input {
    margin: 20px;
  }
`
const ImageWrapper = styled.div`
`

const BlockImage = ({
  className,
  removeBlock,
  updateBlock,
  id,
  dragProps,
  settings,
  isDragging
}) => {
  const [srcInput, setSrcInput] = useState()
  const [width, setWidth] = useState(800)
  const [height, setHeight] = useState()
  const [src, setSrc] = useState('https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')

  const handleChange = event => {
    setSrcInput(event.target.value);
  }

  const submitSrc = () => {
    setSrc(srcInput);
  }

  // https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

  return (
    <Wrapper className={className}>
      <BlockWrapper
        removeBlock={() => removeBlock(id)}
        dragProps={dragProps}
        isDragging={isDragging}
        adjustSize={true}
        setWidth={setWidth}
        maxWidth={width || 800}
        updateBlock={updateBlock}
        blockId={id}
        settings={settings}
      >
        {src ? (
          <ImageWrapper
            style={{
              opacity: settings?.opacity / 100
            }}
          >
            <img src={src} value={srcInput} />
          </ImageWrapper>
        ) : (
          <EmptyWrapper
            style={{
              opacity: settings?.opacity / 100
            }}
          >
            <input type="text" onChange={handleChange} />
            <button onClick={submitSrc} >OK</button>
          </EmptyWrapper>
        )}
      </BlockWrapper>
    </Wrapper>
  )
}

export default BlockImage
