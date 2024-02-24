<template>
  <div>
    <b-modal v-model="showModal" id="modal-1" hide-footer hide-header>
      <p class="my-4">
        是否确认<strong class="text-danger">删除</strong>以下用户
      </p>
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
              disabled
              readonly
              plaintext
            ></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <b-button @click="handleDelete">确认</b-button>
      <b-button @click="hideModal">关闭</b-button>
    </b-modal>
  </div>
</template>

<script>
import {
  getDefaultData,
  memberMethods,
} from "@/views/management/ums/member/components/useDeleteMemberConfirmModal";

export default {
  name: "DeleteMemberConfirmModal",
  data() {
    return getDefaultData();
  },
  methods: {
    ...memberMethods,
  },
};
</script>

<style scoped></style>
