

interface SpringReducerState {

}

const initialState: SpringReducerState = {

}

interface ActionProps {
  type: string;
  payload: any;
}
export const springReducer= (state = initialState, { type, payload }: ActionProps): SpringReducerState => {
  switch (type) {

   

    default:
      return state
  }
}