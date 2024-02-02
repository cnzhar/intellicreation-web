<template>
  <div>
    <b-modal v-model="showModal" id="modal-1" hide-footer hide-header>
      <p class="my-4">Hello from modal!</p>
      <b-button @click="hideModal">关闭</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddNewPermissionModal",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    hideModal() {
      this.showModal = false;
    },
    showModalMethod() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped></style>
