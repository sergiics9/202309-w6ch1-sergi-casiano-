import { usePhone } from '../../hooks/use.phone';

export function Key() {
  const { addNumbers, deleteNumbers } = usePhone();
  return (
    <>
      <li aria-label="listitem">
        <button className="key" onClick={() => addNumbers('1')}>
          1
        </button>
      </li>
      <li>
        <button className="key" onClick={() => addNumbers('2')}>
          2
        </button>
      </li>
      <li>
        <button className="key" onClick={() => addNumbers('3')}>
          3
        </button>
      </li>
      <li>
        <button className="key" onClick={() => addNumbers('4')}>
          4
        </button>
      </li>
      <li>
        <button className="key" onClick={() => addNumbers('5')}>
          5
        </button>
      </li>
      <li>
        <button className="key" onClick={() => addNumbers('6')}>
          6
        </button>
      </li>
      <li>
        <button className="key" onClick={() => addNumbers('7')}>
          7
        </button>
      </li>
      <li>
        <button className="key" onClick={() => addNumbers('8')}>
          8
        </button>
      </li>
      <li>
        <button className="key" onClick={() => addNumbers('9')}>
          9
        </button>
      </li>
      <li>
        <button className="key" onClick={() => addNumbers('0')}>
          0
        </button>
      </li>
      <li>
        <button className="key big" onClick={() => deleteNumbers()}>
          delete
        </button>
      </li>
    </>
  );
}
