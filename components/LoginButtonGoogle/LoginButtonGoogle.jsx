import React from 'react'
import styled from '@emotion/styled'
import Button from 'components/Button'
import { useSession, signIn, signOut } from 'next-auth/react'

const Wrapper = styled(Button)``

const LoginButtonGoogle = ({ className }) => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Hi, {session.user.email}<br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Wrapper className={className} onClick={() => signIn()}>
        Login with Google
      </Wrapper>
    </>
  )
}

export default LoginButtonGoogle
