import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../core/store/store';

import { actions } from '../slice/slice';

export function usePhone() {
  const phoneState = useSelector((state: RootState) => state.phone);
  const dispatch = useDispatch<AppDispatch>();

  const addNumbers = (number: string) => {
    if (phoneState.phone.length < 9) {
      dispatch(actions.phone(number));
    }
  };

  const deleteNumbers = () => {
    dispatch(actions.delete());
  };

  const callButton = () => {
    dispatch(actions.call(hangButton));
  };

  const hangButton = () => {
    dispatch(actions.hang());
  };

  return {
    phoneState,
    deleteNumbers,
    addNumbers,
    callButton,
    hangButton,
  };
}
