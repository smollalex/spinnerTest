import React, { useState, useEffect } from "react";
import { messages } from './messages';
import { i18n } from '../utils';
import { Wrapper } from './styled';

interface ISpinner {
  status: string
}

const getStatusKeys = (messages: Record<string, string>, status: string) => {
  return Object.keys(messages).filter(m => m.toLowerCase().indexOf(status, 0) === 0);
}
  
export const Spinner: React.FC<ISpinner> = (props) => {
  const { status } = props;
  const [message, setMessage] = useState<string>();
  
  useEffect(() => {
    const keys = getStatusKeys(messages, status);
    if (keys.length > 1) {
      let i = 0;
      let interval = 2000;
      console.log(interval);

      const timer = setInterval(() => { 
        setMessage(i18n(keys[i]));
        i++;
        if (i === keys.length) clearInterval(timer); 
      }, interval);
    } else {
      return setMessage(messages[keys[0]]);
    }
  }, [status]);

  return (
    <Wrapper status={status}>
      {message}
    </Wrapper>
  )
}