<template>
  <div>
    <b-sidebar v-model="isVisible" id="sidebar-1" title="我的作品集" shadow>
      <div class="px-3 py-2">
        <p>Cras mattis</p>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "MyCreationSideBar",
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    showSideBarMethod() {
      this.isVisible = true;
    },
  },
};
</script>

<style scoped></style>
