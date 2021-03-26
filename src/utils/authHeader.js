export default function authHeader() {
  let token = localStorage.getItem('token');

  if (token) {
    return { Authorization: 'JWT ' + token };
  } else {
    return {};
  }
}
