<template>
  <div>
    <b-modal v-model="showModal" id="modal-1" hide-footer hide-header>
      <p class="my-4">
        是否确认<strong class="text-danger">删除</strong>以下权限
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
              v-model="permission[inputElement.key]"
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
  permissionMethods,
} from "@/views/management/ums/permission/components/useDeletePermissionConfirmModal";

export default {
  name: "ViewPermissionModal",
  data() {
    return getDefaultData();
  },
  methods: {
    ...permissionMethods,
  },
};
</script>

<style scoped></style>
