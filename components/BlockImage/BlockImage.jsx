import React, { useState } from 'react'
import styled from '@emotion/styled'
import BlockWrapper from 'components/BlockWrapper'

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 10px;
  background: #eee;
  input {
    margin: 20px;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const BlockImage = ({ className, removeBlock, id, dragProps }) => {
  const [srcInput, setSrcInput] = useState()
  const [src, setSrc] = useState()

  const handleChange = event => {
    setSrcInput(event.target.value);
  }

  const submitSrc = () => {
    setSrc(srcInput);
  }

  // https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

  return (
    <BlockWrapper removeBlock={() => removeBlock(id)} dragProps={dragProps}>
      <Wrapper className={className}>
        {src ? (
          <>
            <img src={src} value={srcInput} />
          </>
        ) : (
          <>
            <input type="text" onChange={handleChange} />
            <button onClick={submitSrc} >OK</button>
          </>
        )}
      </Wrapper>
    </BlockWrapper>
  )
}

export default BlockImage
