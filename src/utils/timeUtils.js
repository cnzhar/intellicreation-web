// timeUtils.js
export function timeAgo(time) {
  const date = typeof time === "string" ? new Date(time) : time;
  const now = new Date();
  const diffInSeconds = Math.round((now - date) / 1000);
  const diffInMinutes = Math.round(diffInSeconds / 60);
  const diffInHours = Math.round(diffInMinutes / 60);
  const diffInDays = Math.round(diffInHours / 24);

  if (diffInDays >= 1) {
    if (diffInDays === 1) {
      return `昨天`;
    } else if (diffInDays <= 3) {
      return `${diffInDays}天前`;
    } else {
      // 显示日期，不显示具体时间，格式化为“年-月-日”
      return date
        .toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\//g, "-");
    }
  } else {
    if (diffInHours >= 1) {
      return `${diffInHours}小时前`;
    } else if (diffInMinutes >= 1) {
      return `${diffInMinutes}分钟前`;
    } else {
      return `${diffInSeconds}秒前`;
    }
  }
}
