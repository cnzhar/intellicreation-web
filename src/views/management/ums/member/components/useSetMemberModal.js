export function getDefaultData() {
  return {
    showModal: false,
  };
}

export const memberMethods = {
  hideModal() {
    this.showModal = false;
  },
  showModalMethod() {
    this.showModal = true;
  },
};
