const path = (root: string, path: string) => {
  return root + path;
};

export const paths = {
  root: "/",
  // Define all paths here 🔽 use path() to concatenate root and path
  //? like this example
  hello: path("/", "hello"),
};
