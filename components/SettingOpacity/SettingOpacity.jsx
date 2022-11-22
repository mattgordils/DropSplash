import React from 'react'
import styled from '@emotion/styled'

const mapPercentage = (num, min, max) => {
	// const offset = num * (max - min) / (1 - 0) + min
  const offset = (num - min) * 100 / (max - min) + '% 100%'
  return offset
}

const Wrapper = styled.div`
  text-align: left;
  input[type="range"] {
    appearance: none;
    padding: 0;
    width: 100%;
    height: 4px;
    background: var(--hr-color);
    border-radius: 5px;
    box-shadow: none !important;
    background: linear-gradient(45deg, transparent, var(--main-color));
    background-repeat: no-repeat;
    transition: none !important;

    /* Input Thumb */
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: var(--main-color);
      cursor: ew-resize;
      transition: background var(--md-speed) ease-in-out,
                  box-shadow var(--md-speed) ease-in-out;
    }

    &::-moz-range-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: var(--main-color);
      cursor: ew-resize;
      transition: background var(--md-speed) ease-in-out,
                  box-shadow var(--md-speed) ease-in-out;
    }

    &::-ms-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: var(--main-color);
      cursor: ew-resize;
      transition: background var(--md-speed) ease-in-out,
                  box-shadow var(--md-speed) ease-in-out;
    }

    &::-webkit-slider-thumb:hover {
      background: var(--main-color-darken);
      box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
    }

    &::-moz-range-thumb:hover {
      background: var(--main-color-darken);
      box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
    }

    &::-ms-thumb:hover {
      background: var(--main-color-darken);
      box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
    }

    /* Input Track */
    &::-webkit-slider-runnable-track  {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }

    &::-moz-range-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }

    &::-ms-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }
  }
`

const SettingOpacity = ({ className, setOpacity, settings }) => {
  const handleChange = event => {
    let target = event.target
    setOpacity(target.value)
  }

  const min = 0
  const max = 100

  return (
    <Wrapper className={className} value={settings?.opacity} min={min} max={max}>
      <div className="flex items-center justify-between mb-2">
        <label for="settingOpacity" className='h6 leading-1em'>Opacity</label>
        <div for="settingOpacity" className='tracking-normal text-[12px] normal-case font-medium text-light-text-color mono leading-1em'>{settings?.opacity}</div>
      </div>
      <input
        onChange={handleChange}
        type="range"
        id="settingOpacity"
        name="settingOpacity" 
        min={min}
        max={max}
        value={settings?.opacity}
        step="1"
      />
    </Wrapper>
  )
}

export default SettingOpacity
