<template>
  <div>
    <b-card class="shadow">
      <b-container fluid>
        <b-row
          class="my-1"
          v-for="inputElement in inputElements"
          :key="inputElement"
        >
          <b-col sm="2">
            <label :for="`inputElement-${inputElement.caption}`">
              <b class="text-info">{{ inputElement.caption }}:</b>
            </label>
          </b-col>
          <b-col sm="9">
            <b-form-input
              v-if="inputElement.needMap"
              :id="`inputElement-${inputElement.caption}`"
              :type="inputElement.type"
              v-model="inputElement.captionMap[member[inputElement.key]]"
              class="p-0"
              disabled
              readonly
              plaintext
            ></b-form-input>
            <b-form-input
              v-else
              :id="`inputElement-${inputElement.caption}`"
              :type="inputElement.type"
              v-model="member[inputElement.key]"
              class="p-0"
              disabled
              readonly
              plaintext
            ></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
    <MemberRoleComponent></MemberRoleComponent>
    <MemberLoginLogComponent></MemberLoginLogComponent>
  </div>
</template>

<script>
import {
  getDefaultData,
  memberMethods,
} from "@/views/management/ums/member/ViewMemberDetail/useViewMemberDetail";
import MemberRoleComponent from "@/views/management/ums/member/ViewMemberDetail/MemberRoleComponent";
import MemberLoginLogComponent from "@/views/management/ums/member/ViewMemberDetail/MemberLoginLogComponent";

export default {
  name: "ViewMemberDetail",
  data() {
    return getDefaultData();
  },
  components: {
    MemberRoleComponent,
    MemberLoginLogComponent,
  },
  methods: {
    ...memberMethods,
  },
  created() {
    this.getMemberDetail();
  },
};
</script>

<style scoped></style>
