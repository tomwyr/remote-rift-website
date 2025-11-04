const isPages = process.env.ELEVENTY_ENV === "pages";

export default {
  baseUrl: isPages ? "/remote-rift-website/" : "/",
};
