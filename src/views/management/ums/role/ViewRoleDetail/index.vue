<template>
  <div>
    <b-card class="shadow managementCard-body">
      <h4>角色基本信息</h4>
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
              v-if="inputElement.needMap"
              :id="`inputElement-${inputElement.caption}`"
              :type="inputElement.type"
              v-model="inputElement.captionMap[role[inputElement.key]]"
              disabled
              readonly
              plaintext
            ></b-form-input>
            <b-form-input
              v-else
              :id="`inputElement-${inputElement.caption}`"
              :type="inputElement.type"
              v-model="role[inputElement.key]"
              disabled
              readonly
              plaintext
            ></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    </b-card>

    <RolePermissionComponent></RolePermissionComponent>
    <RoleMemberComponent></RoleMemberComponent>
  </div>
</template>

<script>
import {
  getDefaultData,
  roleMethods,
} from "@/views/management/ums/role/ViewRoleDetail/useViewRoleDetail";
import RolePermissionComponent from "@/views/management/ums/role/ViewRoleDetail/RolePermissionComponent";
import RoleMemberComponent from "@/views/management/ums/role/ViewRoleDetail/RoleMemberComponent";

export default {
  name: "ViewRoleDetail",
  data() {
    return getDefaultData();
  },
  components: {
    RolePermissionComponent,
    RoleMemberComponent,
  },
  methods: {
    ...roleMethods,
  },
  created() {
    this.getRoleDetail();
  },
};
</script>

<style scoped></style>
