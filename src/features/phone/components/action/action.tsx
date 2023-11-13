import { usePhone } from '../../hooks/use.phone';

export function Action() {
  const { callButton, hangButton, phoneState } = usePhone();

  return (
    <>
      <a
        onClick={() => callButton()}
        href="#"
        className={`${phoneState.phone.length === 9 ? 'call active' : 'call'}`}
      >
        Call
      </a>
      <a
        onClick={() => hangButton()}
        href="#"
        className={`${
          phoneState.loadState === 'calling' ? 'hang active' : 'hang hidden'
        }`}
      >
        Hang
      </a>
    </>
  );
}
