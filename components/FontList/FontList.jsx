import React from 'react'
import styled from '@emotion/styled'

const TestInput = styled.input`
  appearance: auto;
`

const Wrapper = styled.div``

const FontItem = styled.div`
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  label {
    display: block;
    position: relative;
    font-size: 14px;
    &:before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background: var(--main-color);
      border-radius: 50%;
      position: absolute;
      right: .75em;
      opacity: 0;
      top: 50%;
      margin-top: -4px;
      line-height: 1em;
    }
  }
  input:checked ~ {
    label {
      background: var(--light-grey);
      &:before {
        opacity: 1;
      }
    }
  }
  
`

const fontItems = [
  {
    name: 'Poppins',
    fontStack: "'Poppins', sans-serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
  },
  {
    name: 'Fraunces',
    fontStack: "'Fraunces', serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
  }
]

const FontList = ({ className, setFont }) => (
  <Wrapper className={className}>
    {fontItems.map((item, index) => {
      return (
        <FontItem>
          <input onChange={() => setFont(item.fontStack)} className='hidden' type="radio" id={item.name} name="fonts" />
          <label style={{ fontFamily: item.fontStack }} htmlFor={item.name} className='px-3 py-2'>{item.name}</label>
        </FontItem>
      )
    })}
  </Wrapper>
)

export default FontList
