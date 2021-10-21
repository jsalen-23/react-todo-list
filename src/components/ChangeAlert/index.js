import { useStorageListener } from '../../hooks/useStorageListener'

import { Wrapper, TextBox } from './styles'

export const ChangeAlert = ({ synchronize }) => {
  const [show, toggleShow] = useStorageListener(synchronize);

  return show && (
    <Wrapper>
      <TextBox>
        <p>Your list is outdated.</p>
        <button onClick={() => toggleShow(!show)}>Refresh</button>
      </TextBox>
    </Wrapper>
  )
}
