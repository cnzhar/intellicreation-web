export function getDefaultData() {
  return {
    categoryQueryParam: {
      id: null,
      menuName: null,
      path: null,
    },
    categoryList: [],
    fields: [],
    isBusy: false,
    pageSizeOptions: [
      { value: 5, text: "每页5条" },
      { value: 10, text: "每页10条" },
      { value: 15, text: "每页15条" },
      { value: 30, text: "每页30条" },
    ],
    pageNum: 1,
    totalRows: 0,
    pageSize: 5,
  };
}

export const categoryMethods = {};
