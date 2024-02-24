<template>
  <div>
    <b-modal v-model="showModal" id="modal-1" centered hide-footer hide-header>
      <p class="my-4">功能</p>
    </b-modal>
  </div>
</template>

<script>
import {
  getDefaultData,
  memberMethods,
} from "@/views/management/ums/member/components/useSetMemberModal";

export default {
  name: "SetMemberModal",
  data() {
    return getDefaultData();
  },
  methods: {
    ...memberMethods,
  },
};
</script>

<style scoped></style>
