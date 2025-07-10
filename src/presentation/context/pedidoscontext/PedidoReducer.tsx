export interface PedidosReducerState {}

export const initialState: PedidosReducerState = {};

interface ActionProps {
  type: '';
  payload: any;
}
export const PedidosReducer = (
  state: PedidosReducerState = initialState,
  { type, payload }: ActionProps,
): PedidosReducerState => {
  switch (type) {
    default:
      return state;
  }
};
