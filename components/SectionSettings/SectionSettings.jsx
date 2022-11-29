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

const SettingCard = styled(Card)`
  width: 250px;
`

const RadioButtonGroup = styled.div`
  --button-height: 30px;
  display: flex;
  background: var(--light-grey);
  padding: 4px;
  border-radius: var(--base-border-radius);
  input:checked ~ {
    label {
      color: var(--text-color);
      background: var(--white);
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
    border-radius: calc(var(--base-border-radius) - 4px);
    transition: color var(--md-speed) ease-in-out,
                background var(--md-speed) ease-in-out;
    &:hover {
      color: var(--text-color);
    }
  }
`

const RadioPlacementGroup = styled.div`
  --button-height: 30px;
  display: flex;
  flex-wrap: wrap;
  background: var(--light-grey);
  padding: 4px;
  border-radius: var(--base-border-radius);
  input:checked ~ {
    label {
      color: var(--main-color);
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
    border-radius: calc(var(--base-border-radius) - 4px);
    transition: color var(--md-speed) ease-in-out,
                background var(--md-speed) ease-in-out;
    &:hover {
      color: var(--text-color);
    }
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
      <SettingCard className='p-3 grid gap-6'>
        <div>
          <h6 className='text-left mb-2'>Content Placement</h6>
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
        </div>

        <div>
          <h6 className='text-left mb-2'>Content Placement</h6>
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
        </div>
      </SettingCard>
    </Wrapper>
  )
}

export default SectionSettings
