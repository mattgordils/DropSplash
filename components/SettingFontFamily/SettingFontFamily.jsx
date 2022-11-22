import React from 'react'
import styled from '@emotion/styled'

const rowHeight = 30

const TestInput = styled.input`
  appearance: auto;
`

const Wrapper = styled.div``

const FontItem = styled.div`
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify: space-between;
  transition: background var(--md-speed) ease-in-out;
  ${ ({ selected }) => selected ? `
    background: var(--light-grey);
  ` : `
    &:hover {
      background: var(--light-grey);
    }
  ` }
  label {
    display: flex;
    align-items: center;
    justify: flex-start;
    position: relative;
    font-size: 14px;
    flex-grow: 1;
    height: ${ rowHeight }px;
  } 
`

const SelectedIndicator = styled.div`
  content: '';
  display: block;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  background: var(--main-color);
  border-radius: 50%;
  margin-right: .75em;
  margin-left: 4px;
  top: 50%;
`

const WeightSelect = styled.div`
  select {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
    height: ${ rowHeight }px;
    line-height: 1em;
    padding-top: 1px;
    width: 100%;
    padding-right: 20px;
    border-radius: 0;
  }
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  &:after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid var(--light-text-color);
    border-right: 2px solid var(--light-text-color);
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -4px;
    transform: rotate(45deg);
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

const SettingFontFamily = ({ className, setFontFamily, setFontWeight, settings }) => (
  <Wrapper className={className}>
    {fontItems.map((item, index) => {
      return (
        <FontItem selected={item.fontStack === settings.fontFamily}>
          <input onChange={() => setFontFamily(item.fontStack)} className='hidden' type="radio" id={item.name} name="fonts" checked={item.fontStack === settings.fontFamily} />
          <label style={{ fontFamily: item.fontStack }} htmlFor={item.name} className='px-3 py-2'>{item.name}</label>
          {item.weights.length > 1 && item.fontStack === settings.fontFamily && (
            <>
              <WeightSelect>
                <select
                  name="fontWeight"
                  id="fontWeight"
                  value={settings.fontWeight}
                  onChange={event => setFontWeight(event.target.value)}>
                  {item.weights.map(weight => (
                    <option value={weight}>{weight}</option>
                  ))}
                </select>
              </WeightSelect>
              <SelectedIndicator/>
            </>
          )}
        </FontItem>
      )
    })}
  </Wrapper>
)

export default SettingFontFamily
