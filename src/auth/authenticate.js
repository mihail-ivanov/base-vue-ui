export default (to, from, next) => {
  if (localStorage.getItem("token") != null) {
    next();
  } else {
    localStorage.removeItem("token");
    location.replace("/auth/login");
    next("/auth/login");
  }
};
