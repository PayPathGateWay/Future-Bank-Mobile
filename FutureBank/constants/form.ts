import { createModel } from '@rematch/core';
import { RootModel } from './Index';

interface FormState {
  [key: string]: any;
}

interface FormPayload {
  formId: string;
  formValues: any;
}

export const form = createModel<RootModel>()({
  state: {} as FormState,
  reducers: {
    setOne(state, { formId, formValues }: FormPayload) {
      return {
        ...state,
        [formId]: formValues,
      };
    },
    updateOne(state, { formId, formValues }: FormPayload) {
      return {
        ...state,
        [formId]: {
          ...state[formId],
          ...formValues,
        },
      };
    },
    removeOne(state, { formId }: { formId: string }) {
      const newState = { ...state };
      delete newState[formId];
      return newState;
    },
  },
  effects: (dispatch) => ({
    async initForm(payload: FormPayload) {
      dispatch.form.setOne(payload);
    },
    async updateForm(payload: FormPayload) {
      dispatch.form.updateOne(payload);
    },
  }),
});
