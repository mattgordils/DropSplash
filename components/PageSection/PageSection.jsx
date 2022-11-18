import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import BlockEditable from 'components/BlockEditable'
import BlockImage from 'components/BlockImage'
import AddContentActions from 'components/AddContentActions'
import { resetServerContext, DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

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

  const addContent = (type, placeholder, id, html) => {
    const newBlock = {
      id: id || JSON.stringify(Date.now()),
      type: type,
      html: html || '',
      placeholder: placeholder || componentMap[type].placeholder,
      tag: componentMap[type].tag
    }
    updateBlocks(blocks.concat(newBlock))
    return
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

  const handleOnDragEnd = result => {
    if (!result.destination) return
    const items = Array.from(blocks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    updateBlocks(items)
  }

  useEffect(() => {
    const starterHeadline = {
      id: 'starterHeadline',
      type: 'headline',
      html: '',
      placeholder: 'My First Splash Page',
      tag: 'h1'
    }
    const starterText = {
      id: 'starterText',
      type: 'text',
      html: '',
      placeholder: 'Add text, image, or video.',
      tag: 'p'
    }
    updateBlocks([starterHeadline, starterText])
  }, [])

  return (
    <>
    <Wrapper className={className}>
      <div>
          {blocks.length > 0 ? (
            <div>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId={'sectionContent'}>
                  {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                      {blocks.map((item, index) => {
                        const Component = componentMap[item.type].component
                        return (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => {
                              const splitDragStyle = provided.draggableProps?.style?.transform?.split(', ')
                              if (splitDragStyle) {
                                provided.draggableProps.style.transform = 'translate(0px, ' + splitDragStyle[1]
                              }
                              console.log(snapshot.isDragging)
                              return (
                                <li
                                  {...provided.draggableProps}
                                  ref={provided.innerRef}
                                  style={provided.draggableProps.style}
                                >
                                  <Component
                                    {...item}
                                    id={item.id}
                                    tag={item.tag}
                                    placeholder={item.placeholder}
                                    html={item.content}
                                    updateBlock={updateBlock}
                                    removeBlock={removeBlock}
                                    dragProps={provided.dragHandleProps}
                                    isDragging={snapshot.isDragging}
                                  />
                                </li>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
              <AddContentActions addContent={addContent}/>
            </div>
          ) : (
            <div>
              <h1>Add Content</h1>
              <p>Add text, image, or video.</p>
              <AddContentActions addContent={addContent}/>
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
          <div key={item.id + 'html'}>
            {`<section class='something'></section>`}
          </div>
        )
      })}
    </HtmlPreview>
    </>
  )
}

export default PageBuilder
