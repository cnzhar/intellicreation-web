<template>
  <div>
    <b-card class="shadow">
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
    </b-card>
    <PermissionRoleComponent></PermissionRoleComponent>
  </div>
</template>

<script>
import {
  getDefaultData,
  permissionMethods,
} from "@/views/management/ums/permission/ViewPermissionDetail/useViewPermissionDetail";
import PermissionRoleComponent from "@/views/management/ums/permission/ViewPermissionDetail/PermissionRoleComponent";

export default {
  name: "ViewPermissionDetail",
  data() {
    return getDefaultData();
  },
  components: {
    PermissionRoleComponent,
  },
  methods: {
    ...permissionMethods,
  },
  created() {
    this.getPermissionDetail();
  },
};
</script>

<style scoped></style>
