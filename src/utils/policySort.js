const getCreatedTime = (policy) => {
  const time = Date.parse(policy.createdAt || "");
  return Number.isNaN(time) ? 0 : time;
};

export const sortPoliciesByUpload = (policies) =>
  [...policies].sort(
    (a, b) =>
      getCreatedTime(a) - getCreatedTime(b) ||
      Number(b.year) - Number(a.year) ||
      Number(b.month) - Number(a.month) ||
      a.name.localeCompare(b.name)
  );
