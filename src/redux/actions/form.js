export const FORM_SUBMIT = 'FROM_SUBMIT';
export function form_submit(values) {
  return {
    type: FORM_SUBMIT,
    payload: values
  };
}
