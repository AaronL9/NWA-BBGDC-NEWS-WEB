import { format } from "date-fns";

export function formatDate(timestamp) {
  const dateObject = new Date(timestamp);
  const formattedDate = format(dateObject, "MMMM dd, yyyy hh:mm a");

  return formattedDate;
}

export function formatNewsDate(createdAt, updatedAt) {
  let formattedDate = `Publish ${formatDate(createdAt)}`;
  if (createdAt !== updatedAt) {
    formattedDate += ` | Updated ${formatDate(updatedAt)}`;
  }

  return formattedDate;
}
