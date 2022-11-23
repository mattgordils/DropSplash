import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Card from 'components/Card'
import Button from 'components/Button'
import { FiAlignCenter, FiAlignLeft, FiAlignRight } from 'react-icons/fi'
import { FaCircle } from 'react-icons/fa'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`

const RadioButtonGroup = styled.div`
  display: flex;
  input:checked ~ {
    label {
      color: var(--text-color);
      background: var(--light-grey);
    }
  }
  > div {
    flex-grow: 1;
  }
  label {
    cursor: pointer;
    color: var(--light-text-color);
    height: var(--button-height);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    border-radius: var(--base-border-radius);
  }
`

const RadioPlacementGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: var(--light-grey);
  padding: 2px;
  border-radius: calc(var(--base-border-radius) + 2px);
  --button-height: 30px;
  input:checked ~ {
    label {
      color: var(--text-color);
      background: var(--white);
    }
  }
  > div {
    flex-grow: 1;
    width: 33.333%;
  }
  label {
    cursor: pointer;
    color: var(--light-text-color);
    height: var(--button-height);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--base-border-radius);
  }
`

const placementOptions = [
  'left-top',
  'center-top',
  'right-top',
  'left-center',
  'center-center',
  'right-center',
  'left-bottom',
  'center-bottom',
  'right-bottom'
]

const SectionSettings = ({ className, settings, updateSetting, id }) => {
  console.log(settings)
  useEffect(() => {
    console.log('settings updated')
  }, [settings])
  return (
    <Wrapper className={className}>
      <Button>Section Settings</Button>
      <Card>
        <RadioButtonGroup>
          <div selected={'left' === settings.textAlignment}>
            <input onChange={() => updateSetting('textAlignment', 'left')} className='hidden' type="radio" id='left' name="fonts" checked={'left' === settings.textAlignment} />
            <label htmlFor='left' className='px-3 py-2'><FiAlignLeft size='24px' /></label>
          </div>

          <div selected={'center' === settings.textAlignment}>
            <input onChange={() => updateSetting('textAlignment', 'center')} className='hidden' type="radio" id='center' name="fonts" checked={'center' === settings.textAlignment} />
            <label htmlFor='center' className='px-3 py-2'><FiAlignCenter size='24px' /></label>
          </div>
          
          <div selected={'right' === settings.textAlignment}>
            <input onChange={() => updateSetting('textAlignment', 'right')} className='hidden' type="radio" id='right' name="fonts" checked={'right' === settings.textAlignment} />
            <label htmlFor='right' className='px-3 py-2'><FiAlignRight size='24px' /></label>
          </div>
        </RadioButtonGroup>

        <RadioPlacementGroup>
          {placementOptions.map((item, index) => (
            <div
              selected={item === settings.contentPlacement}
              key={'section-' + id + '-placement-' + index}
            >
              <input
                onChange={() => updateSetting('contentPlacement', item)}
                className='hidden'
                type="radio"
                id={item}
                name="contentPlacement"
                checked={item === settings.contentPlacement}
              />
              <label htmlFor={item}><FaCircle size='12px' /></label>
            </div>
          ))}
        </RadioPlacementGroup>
      </Card>
    </Wrapper>
  )
}

export default SectionSettings
