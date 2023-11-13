import { usePhone } from '../../hooks/use.phone';

export function Display() {
  const { phoneState } = usePhone();
  return (
    <>
      <span className="number">{phoneState.phone}</span>
    </>
  );
}
