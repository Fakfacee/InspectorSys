export function formatDate(originalDate) {
  const year = originalDate.getFullYear();
  const month = originalDate.getMonth() + 1; // 月份从 0 开始计数，需要加 1
  const day = originalDate.getDate();

  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate
}
