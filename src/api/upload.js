import request from "@/utils/request";

export function uploadImage(inputFile) {
  const image = new FormData();
  image.append("image", inputFile);
  return request({
    method: "post",
    url: "/upload/uploadImage",
    headers: {
      isToken: true,
      "Content-Type": "multipart/form-data",
    },
    data: image,
  });
}
