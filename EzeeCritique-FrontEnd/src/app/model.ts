export default interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  role: string;
}

export default interface Review {
  id: number;
  pname: string;
  bname: string;
  uid: number;
  description: string;
  rating: string;
}
