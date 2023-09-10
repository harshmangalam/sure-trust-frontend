function calculateTimeDifferenceFromNow(date) {
  const now = Date.now();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export { calculateTimeDifferenceFromNow };
