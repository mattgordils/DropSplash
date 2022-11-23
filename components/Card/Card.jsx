import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  background: var(--bg-color);
  border-radius: var(--base-border-radius);
  box-shadow: 0 8px 16px rgba(0, 0, 0, .2);
`

const Card = ({ className, children, ref, style }) => (
  <Wrapper className={className} ref={ref} style={style}>
    {children}
  </Wrapper>
)

export default Card
