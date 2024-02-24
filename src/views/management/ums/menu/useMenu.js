import { menuList } from "@/api/ums";

export function getDefaultData() {
  return {
    menuQueryParam: {
      id: null,
      menuName: null,
      path: null,
      pageNum: 1,
      pageSize: 5,
    },
    menuList: [],
    fields: [
      { key: "id", label: "ID" },
      { key: "menuName", label: "菜单名" },
      { key: "path", label: "菜单路径" },
      { key: "actions", label: "操作" },
    ],
    isBusy: false,
    pageSizeOptions: [
      { value: 5, text: "每页5条" },
      { value: 10, text: "每页10条" },
      { value: 15, text: "每页15条" },
      { value: 30, text: "每页30条" },
    ],
    totalRows: 0,
  };
}

export const menuMethods = {
  getMenuList() {
    this.isBusy = true;
    menuList(this.menuQueryParam)
      .then((response) => {
        this.menuList = response.data.data.rows;
        this.totalRows = response.data.data.total;
        this.isBusy = false;
      })
      .catch((error) => {
        this.$bvToast.toast("查询菜单列表失败！错误信息：" + error, {
          title: "系统消息",
          autoHideDelay: 5000,
        });
      });
  },
  handleReset() {
    this.menuQueryParam.id = null;
    this.menuQueryParam.menuName = null;
    this.menuQueryParam.path = null;
    this.getMenuList();
  },
  handlePageSizeChange(pageSize) {
    this.menuQueryParam.pageSize = pageSize;
    this.getMenuList();
  },
  handlePageNumChange(pageNum) {
    this.menuQueryParam.pageNum = pageNum;
    this.getMenuList();
  },
  handleAddNew() {
    this.$refs.addNewMenuModalRef.showModalMethod();
  },
  handleView(item) {
    this.$router.push("/admin/ums/menuDetail?pid=" + item.id);
  },
  handleEdit(item) {
    this.$refs.editMenuDetailModalRef.showModalMethod(item.id);
  },
  handleDelete(item) {
    this.$refs.deleteMenuConfirmModalRef.showModalMethod(item.id);
  },
};
