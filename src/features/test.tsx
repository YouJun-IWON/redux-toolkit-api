import React, { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { fetchUsersAsync, incrementAsync } from './counter/counterSlice';

const Test = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {


    const promise = dispatch(fetchUsersAsync());

    // const promise = dispatch(incrementAsync(10));

    return () => {
      promise.abort(); // Toggle 버튼을 눌러서 test 컴포넌트가 더 이상 사용되지 않는 unmount 될 때 abort()가 실행되어 실행이 중지된다. 
    };
  }, []);

  return <div>Test</div>;
};

export default Test;
