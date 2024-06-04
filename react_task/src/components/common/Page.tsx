import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  height: 100%;
  background: var(--gradient-bg-app);
`;

const ChildrenContainer = styled.div`
  margin: 0 auto;
  max-width: 375px;
  height: 100%;
`;
