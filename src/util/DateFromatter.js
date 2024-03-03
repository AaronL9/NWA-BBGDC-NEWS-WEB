import { formatDistanceToNow } from "date-fns";

export function formatTimeAgo(timestamp) {
  // Calculate the difference in hours

  // Format the difference as "X time ago"
  const formattedTimeAgo = formatDistanceToNow(timestamp, { addSuffix: true });

  return formattedTimeAgo;
}
