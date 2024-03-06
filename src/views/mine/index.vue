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
              v-model="inputElement.captionMap[mineBasicInfo[inputElement.key]]"
              class="p-0"
              disabled
              readonly
              plaintext
            ></b-form-input>
            <b-form-input
              v-else
              :id="`inputElement-${inputElement.caption}`"
              :type="inputElement.type"
              v-model="mineBasicInfo[inputElement.key]"
              class="p-0"
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
import { getDefaultData, mineMethods } from "@/views/mine/useMine";

export default {
  name: "mine-index",
  data() {
    return getDefaultData();
  },
  methods: {
    ...mineMethods,
  },
  created() {
    this.getMineBasicInfo();
  },
};
</script>

<style scoped></style>
