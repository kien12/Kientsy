export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export constopenModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
}

export const closeModal = () = {
  return {
    type: CLOSE_MODAL
  };
}