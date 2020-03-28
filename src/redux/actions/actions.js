import IMAGETOGGLING from './actionsTypes';

export default function imageToggling(data) {
  return {
    type: IMAGETOGGLING,
    payload: data,
  };
}
