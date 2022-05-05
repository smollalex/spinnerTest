import React, { useEffect, useState } from 'react';
import { Spinner } from '../Spinner';
import { Status } from '../utils';
import { Wrapper, Content } from './styled';

interface IWidget {

}

export const Widget: React.FC<IWidget> = () => {
  const [status, setStatus] = useState<Status>(Status.LOADING);

  useEffect(() => {
    setTimeout(() => {
      setStatus(Status.ERROR); // change status to Status.SUCCESS for succes case
    }, 10000);
  }, []);

  return (
    <Wrapper>
      <Spinner status={status} />
      <Content>Widget content</Content>
    </Wrapper>
  )
}