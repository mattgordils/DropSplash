import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import BlockEditable from 'components/BlockEditable'
import BlockImage from 'components/BlockImage'
import AddContentActions, { ContentMenu } from 'components/AddContentActions'
import SectionSettings from 'components/SectionSettings'
import { resetServerContext, DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const textToFlex = {
  top: 'flex-start',
  left: 'flex-start',
  bottom: 'flex-end',
  right: 'flex-end',
  center: 'center'
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: ${ ({ vAlign }) => textToFlex[vAlign] };
  justify-content: ${ ({ hAlign }) => textToFlex[hAlign] };
  text-align: ${ ({ settings }) => settings.textAlignment || center };
`

const InnerWrapper = styled.div`
  // margin-top: auto;
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
    placeholder: 'Enter headline',
    tag: 'h1',
    settings: {
      fontSize: 50,
      fontWeight: 600,
      fontFamily: 'UI Font'
    }
  },
  text: {
    component: BlockEditable,
    placeholder: 'Type something',
    tag: 'p',
    settings: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: 'UI Font'
    }
  },
  image: {
    component: BlockImage,
    placeholder: '',
    tag: '',
    settings: {
      opacity: 100,
      crop: 'auto',
      borderRadius: 0
    }
  }
}

const initialSettings = {
  textAlignment: 'center',
  contentPlacement: 'center-center',
  backgroundColor: '#fff',
  backgroundImage: false,
  backgroundVideo: false
}

const PageSection = ({ className }) => {
  const [blocks, updateBlocks] = useState([])
  const [sectionSettings, updateSectionSettings] = useState(initialSettings)

  const addContent = (type, placeholder, id, html, index) => {
    const newBlock = {
      id: id || JSON.stringify(Date.now()),
      type: type,
      html: html || '',
      placeholder: placeholder || componentMap[type].placeholder,
      tag: componentMap[type].tag,
      settings: {...componentMap[type].settings}
    }
    if (index === 0) {
      console.log('first item')
      const blockArray = []
      blockArray.push(newBlock)
      console.log(blockArray)
      updateBlocks(blockArray.concat(blocks))
    } else if (index) {
      blocks.splice(index, 0, newBlock)
      // Add with concat method without mutating original array
      let newArray = [].concat(blocks)

      console.log(newArray)
      updateBlocks(newArray)

    } else {
      console.log('not 0')
      updateBlocks(blocks.concat(newBlock))
    }
    return
  }

  const removeBlock = id => {
    const updatedBlocks = blocks.filter(block => {
      return block.id !== id;
    })
    updateBlocks(updatedBlocks)
  }

  const updateBlock = (key = 'html', value, id) => {
    const indexOfBlock = blocks.findIndex(block => {
      return block.id === id;
    })

    const items = Array.from(blocks)
    if (key.includes('settings')) {
      const settingKey = key.split('.')[1]
      if (settingKey) {
        items[indexOfBlock].settings[settingKey] = value
      }
    } else {
      items[indexOfBlock][key] = value
    }

    console.log(items)
    updateBlocks(items)
  }

  const handleOnDragEnd = result => {
    if (!result.destination) return
    const items = Array.from(blocks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    updateBlocks(items)
  }

  const updateSetting = (key, value) => {
    updateSectionSettings(prevState => {
      return {
        ...prevState,
        [key]: value
      }
    })
  }

  useEffect(() => {
    const starterHeadline = {
      id: 'starterHeadline',
      type: 'headline',
      html: '',
      placeholder: 'My First Splash Page',
      tag: 'h1',
      settings: {
        fontSize: 50
      }
    }
    const starterText = {
      id: 'starterText',
      type: 'text',
      html: '',
      placeholder: 'Add text, image, or video.',
      tag: 'p',
      settings: {
        fontSize: 16
      }
    }
    // updateBlocks([starterHeadline, starterText])
  }, [])

  return (
    <>
    <Wrapper
      className={className}
      settings={sectionSettings}
      hAlign={sectionSettings.contentPlacement.split('-')[0]}
      vAlign={sectionSettings.contentPlacement.split('-')[1]}
    >
      <SectionSettings
        settings={sectionSettings}
        updateSetting={updateSetting}
        id={'sectionId'}
      />
      <InnerWrapper
        hAlign={sectionSettings.contentPlacement.split('-')[0]}
        vAlign={sectionSettings.contentPlacement.split('-')[1]}
      >
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
                            return (
                              <li
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                                style={provided.draggableProps.style}
                              >
                                <AddContentActions addContent={addContent} position={index} addBetween/>
                                <Component
                                  {...item}
                                  id={item.id}
                                  tag={item.tag}
                                  type={item.type}
                                  placeholder={item.placeholder}
                                  html={item.content}
                                  settings={item?.settings}
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
            <AddContentActions addContent={addContent} addBetween/>
          </div>
        ) : (
          <div>
            <h2 className='mb-2'>Add Content</h2>
            <p className='small text-light-text-color mb-8'>Add text, image, or video.</p>
            <div className="w-full">
              <ContentMenu addContent={addContent} visible />
            </div>
          </div>
        )}
      </InnerWrapper>
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
        console.log(item)
        if (item.type == 'image') {
          return (
            <div key={item.id + 'html'}>
              {`<div class='` + item.type + `'><img src='' /></div>`}
            </div>
          )
        }
        return (
          <div key={item.id + 'html'}>
            {`<div class='` + item.type + `'><`+ item.tag +`>` + item.html + `</` + item.tag + `></div>`}
          </div>
        )
      })}
    </HtmlPreview>
    </>
  )
}

export default PageSection
