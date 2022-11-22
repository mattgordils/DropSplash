import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  input[type="range"] {
    appearance: none;
    margin-right: 15px;
    width: 200px;
    height: 7px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(#ff4500, #ff4500);
    background-size: 70% 100%;
    background-repeat: no-repeat;

    &::-webkit-slider-thumb,
    &::-moz-range-thumb,
    &::-ms-thumb {
      appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #ff4500;
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition: background .3s ease-in-out;
    }

    &::-webkit-slider-runnable-track,
    &::-moz-range-track,
    &::-ms-track {
      appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }
  }
`

const SettingFontSize = ({ className, setFontSize, settings }) => {
  const handleChange = event => {
    let target = event.target
    setFontSize(target.value)
    if (event.target.type !== 'range') {
      target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val = target.value
    
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }
  return (
    <Wrapper className={className}>
      SettingFontSize
      <input
        onChange={handleChange}
        type="range"
        id="cowbell"
        name="cowbell" 
        min="18"
        max="120"
        value={settings?.fontSize}
        step="1"
      />
    <label for="cowbell">Cowbell</label>
    </Wrapper>
  )
}

export default SettingFontSize
