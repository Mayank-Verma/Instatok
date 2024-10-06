export function timePassedSincePostUpdated(date) {
  const now = new Date();
  const seconds = Math.floor((now - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} years ago`;

  interval = Math.floor(seconds / 2592000); // 30 days
  if (interval > 1) return `${interval} months ago`;

  interval = Math.floor(seconds / 86400); // 24 hours
  if (interval > 1) return `${interval} days ago`;

  interval = Math.floor(seconds / 3600); // 60 minutes
  if (interval > 1) return `${interval} hours ago`;

  interval = Math.floor(seconds / 60); // 60 seconds
  if (interval > 1) return `${interval} minutes ago`;

  return `${seconds} seconds ago`;
}

// // Example usage:
// const updatedAt = "2023-10-01T12:00:00Z"; // Example timestamp
// console.log(timeSince(updatedAt));
