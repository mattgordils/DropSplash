import React, { useState } from 'react'
import styled from '@emotion/styled'
import BlockEditable from 'components/BlockEditable'
import BlockImage from 'components/BlockImage'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const HtmlPreview = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 20%;
  background: #eee;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-family: monospace;
`

const componentMap = {
  headline: {
    component: BlockEditable,
    placeholder: 'Page title',
    tag: 'h1'
  },
  text: {
    component: BlockEditable,
    placeholder: 'Type something',
    tag: 'p'
  },
  image: {
    component: BlockImage,
    placeholder: '',
    tag: ''
  }
}

const PageBuilder = ({ className }) => {
  const [blocks, updateBlocks] = useState([])

  const addContent = type => {
    const newBlock = {
      id: Date.now(),
      type: type,
      html: '',
      placeholder: componentMap[type].placeholder,
      tag: componentMap[type].tag
    }
    updateBlocks(blocks.concat(newBlock))
  }

  const removeBlock = id => {
    const updatedBlocks = blocks.filter(block => {
      return block.id !== id;
    })
    updateBlocks(updatedBlocks)
  }

  const updateBlock = (id, object) => {
    const indexOfBlock = blocks.findIndex(block => {
      return block.id === id;
    })

    blocks[indexOfBlock] = object

    console.log(object)

    // updateBlocks(updatedBlocks)
  }

  const ContentAddActions = () => (
    <div>
      <button onClick={() => addContent('headline')}>+ Add Headline</button>
      <button onClick={() => addContent('text')}>+ Add Text</button>
      <button onClick={() => addContent('image')}>+ Add Image</button>
    </div>
  )

  return (
    <>
    <Wrapper className={className}>
      <div>
        {blocks.length > 0 ? (
          <div>
            {blocks.map(item => {
              const Component = componentMap[item.type].component
              return (
                <div key={item.id}>
                  <Component
                    {...item}
                    id={item.id}
                    tag={item.tag}
                    placeholder={item.placeholder}
                    html={item.content}
                    updateBlock={updateBlock}
                    removeBlock={removeBlock}
                  />
                </div>
              )
            })}
            <ContentAddActions/>
          </div>
        ) : (
          <div>
            <h1>Get Started</h1>
            <p>Add your first pieces of content and create your first splash page.</p>
            <ContentAddActions/>
          </div>
        )}
      </div>
    </Wrapper>

    <HtmlPreview>
      {`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charSet="utf-8"/><meta http-equiv="x-ua-compatible" content="ie=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          </head>
        </html>
      `}
      {blocks.map(item => {
        const Component = componentMap[item.type].component
        return (
          <div key={item.id}>
            {`<section class='something'></section>`}
          </div>
        )
      })}
    </HtmlPreview>
    </>
  )
}

export default PageBuilder
