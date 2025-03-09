/**
 * Formats a given date string into a localized date string.
 *
 * @param date - The date string to format.
 * @param longMonth - Optional. If true, the month will be formatted in its long form (e.g., "January").
 *                    If false or omitted, the month will be formatted in its short form (e.g., "Jan").
 * @returns The formatted date string in "en-US" locale.
 */
export function formatDate(date: string, longMonth: boolean = false) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: longMonth ? "long" : "short",
    day: "numeric",
  });
}

/**
 * Formats a vote value by converting it to a percentage and/or fixing the number of decimal places.
 *
 * @param vote - The vote value to format.
 * @param percentage - Whether to convert the vote to a percentage (default is true).
 * @param decimals - The number of decimal places to include in the formatted vote (default is 1).
 * @returns The formatted vote as a string.
 */
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
