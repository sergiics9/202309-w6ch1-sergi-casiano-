import { usePhone } from '../../hooks/use.phone';

export function Key() {
  const { addNumbers, deleteNumbers } = usePhone();
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  return (
    <>
      {numbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => addNumbers(number)}
            type="button"
            className="key"
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => deleteNumbers()}
          type="submit"
          className="key big"
        >
          Delete
        </button>
      </li>
    </>
  );
}
