export function formatDate(date: string, longMonth: boolean = false) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: longMonth ? "long" : "short",
    day: "numeric",
  });
}

export function formatVote(
  vote: number,
  percentage: boolean = true,
  decimals: number = 1,
) {
  if (percentage) {
    vote = vote * 10;
  }
  return vote.toFixed(decimals);
}
