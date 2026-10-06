export const formatPeriod = (start: string, end?: string) => {
  const fmt = (date: string) => date.replace("-", ".");
  return `${fmt(start)} – ${end ? fmt(end) : "진행 중"}`;
};
