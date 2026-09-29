const trimTrailingSlash = (value) => value.replace(/\/$/, "");

export const KKPHIM_API_URL = trimTrailingSlash(
  import.meta.env.VITE_KKPHIM_API_URL || "https://phimimg.com/v1/api",
);

// export const KKPHIM_IMAGE_URL = `${trimTrailingSlash(
//   import.meta.env.VITE_KKPHIM_IMAGE_URL || "https://phimimg.com/",
// )}/`;

// export const getMovieImageUrl = (imagePath) => {
//   if (!imagePath) return "";
//   if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
//     return imagePath;
//   }
//   const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

//   return `${KKPHIM_IMAGE_URL}${cleanPath}`;
// };

const baseUrl = import.meta.env.VITE_KKPHIM_IMAGE_URL;

export function getMovieImageUrl(path) {
  if (!path) return "";

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${baseUrl}/${cleanPath}`;
}
