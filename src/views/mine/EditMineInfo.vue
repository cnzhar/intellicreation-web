<template>
  <div>
    <b-card text-variant="red" class="shadow">
      <b-container fluid>
        <b-row class="my-1">
          <b-col sm="1">
            <label>
              <b class="text-info">头像:</b>
            </label>
          </b-col>
          <b-col sm="6">
            <b-avatar
              variant="danger"
              text="FF"
              :src="mine.avatar"
              class="align-baseline"
              size="6rem"
            >
            </b-avatar>
            <input
              @change="onAvatarChange"
              type="file"
              id="avatar-input"
              style="display: none"
              accept="image/*"
            />
            <b-button @click="handleChooseFile" variant="primary"
              >更改头像</b-button
            >
            <b-button @click="handleChooseFile" variant="primary"
              >更改头像框</b-button
            >
          </b-col>
        </b-row>
        <b-row
          class="my-1"
          v-for="inputElement in inputElements"
          :key="inputElement"
        >
          <b-col sm="1">
            <label :for="`inputElement-${inputElement.caption}`">
              <b class="text-info">{{ inputElement.caption }}:</b>
            </label>
          </b-col>
          <b-col sm="6">
            <b-form-input
              :id="`inputElement-${inputElement.caption}`"
              :type="inputElement.type"
              v-model="mine[inputElement.key]"
            ></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <b-button @click="handleSave" variant="primary">保存</b-button>
    </b-card>
  </div>
</template>

<script>
import { getDefaultData, mineMethods } from "@/views/mine/useEditMineInfo";

export default {
  name: "EditMineInfo",
  data() {
    return getDefaultData();
  },
  methods: {
    ...mineMethods,
  },
  created() {
    this.getMineEditInfo();
  },
};
</script>

<style scoped></style>
