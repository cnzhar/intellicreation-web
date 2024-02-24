<template>
  <div>
    <b-modal v-model="showModal" id="modal-1" centered hide-footer hide-header>
      <p class="my-4">新增标签</p>
      <b-container fluid>
        <b-row
          class="my-1"
          v-for="inputElement in inputElements"
          :key="inputElement"
        >
          <b-col sm="3">
            <label :for="`inputElement-${inputElement.caption}`">
              <b class="text-info">{{ inputElement.caption }}:</b>
            </label>
          </b-col>
          <b-col sm="9">
            <b-form-input
              :id="`inputElement-${inputElement.caption}`"
              :type="inputElement.type"
              v-model="member[inputElement.key]"
            ></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <b-button @click="handleAddMember">确认</b-button>
      <b-button @click="hideModal">关闭</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddNewTagModal",
  data() {
    return {
      showModal: false,
      inputElements: [
        { caption: "UID", type: "text", key: "uid" },
        { caption: "昵称", type: "text", key: "nickname" },
        { caption: "电子邮件", type: "text", key: "email" },
      ],
      member: {},
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
