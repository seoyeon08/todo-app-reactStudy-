import React, {useState, useCallback} from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(
    e => {
      onInsert(value);
      setValue('');  //value 값 초기화

      //이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;