<template>
  <div>
    <b-modal v-model="showModal" id="modal-1" centered hide-footer hide-header>
      <p class="my-4">功能</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "SetRoleModal",
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
