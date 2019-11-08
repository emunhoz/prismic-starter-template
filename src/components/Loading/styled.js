import styled, { keyframes } from 'styled-components'

const spinner = () => keyframes`
  to { transform: rotate(360deg);}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 563px;
`

export const Loading = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: inline-block;
  animation: ${spinner} 1.2s linear infinite;
`
