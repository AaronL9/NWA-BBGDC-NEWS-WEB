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

export function cutStringWithEllipsis(inputString, maxLength) {
  if (inputString.length > maxLength) {
    let trimmedString = inputString.substring(0, maxLength);

    while (/\s$/.test(trimmedString)) {
      trimmedString = trimmedString.substring(0, trimmedString.length - 1);
    }

    trimmedString += "...";

    return trimmedString;
  } else {
    return inputString;
  }
}
