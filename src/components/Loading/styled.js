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
  border: 5px solid var(--border-light);
  border-left-color: var(--primary-color);
  border-radius: 50%;
  width: 68px;
  height: 68px;
  display: inline-block;
  animation: ${spinner} 1.2s linear infinite;
`
