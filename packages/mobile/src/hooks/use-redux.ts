import { useDispatch, useSelector } from 'react-redux';
import { ActionType, RootAction, RootState } from 'typesafe-actions';

export function useReduxAction<AT extends ActionType<RootAction>>(
  actionCreator: AT
) {
  const dispatch = useDispatch();

  return (
    ...args: AT extends ((...args: infer Args) => any) ? Args : any[]
  ) => {
    dispatch(actionCreator(...(args as any[])));
  };
}

type Result<S> = S extends (...args: any[]) => infer R ? R : any;

export function useReduxState<
  S extends (state: RootState) => any,
  R extends Result<S>
>(selector: S, equalityFn?: (left: R, right: R) => boolean) {
  return useSelector(selector, equalityFn) as R;
}
