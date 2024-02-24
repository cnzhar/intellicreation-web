<template>
  <div>
    <b-card class="shadow managementCard-body">
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
              v-model="menu[inputElement.key]"
              disabled
              readonly
              plaintext
            ></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import {
  getDefaultData,
  menuMethods,
} from "@/views/management/ums/menu/ViewMenuDetail/useViewMenuDetail";

export default {
  name: "ViewMenuDetail",
  data() {
    return getDefaultData();
  },
  methods: {
    ...menuMethods,
  },
  created() {
    this.getMenuDetail();
  },
};
</script>

<style scoped></style>
