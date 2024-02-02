<template>
  <div>
    <b-modal v-model="showModal" id="modal-1" hide-footer hide-header>
      <p class="my-4">edit</p>
      <b-form-input v-model="member.id" placeholder="输入id"></b-form-input>
      <b-button @click="hideModal">关闭</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "EditMemberModal",
  data() {
    return {
      showModal: false,
      member: {
        id: null,
      },
    };
  },
  methods: {
    hideModal() {
      this.showModal = false;
    },
    showModalMethod(id) {
      this.showModal = true;
      this.member.id = id;
    },
  },
};
</script>

<style scoped></style>
