//nav link data
type NavProps = {
  title: string;
  path: string;
};

export const nav: NavProps[] = [
  {
    title: "Add Users",
    path: "/admin/add",
  },
];

//initial state
export const initialState: TUser = {
  fullName: "",
  email: "",
  gender: "",
  age: 18,
  salary: 100,
  status: "",
  role: "",
  country: "",
};

//initial state types
export type TUser = {
  fullName: string;
  email: string;
  gender: string;
  age: number;
  salary: number;
  status: string;
  role: string;
  country: string;
};

//user response from server
export type TUserResponse = {
  _id: string;
  fullName: string;
  email: string;
  gender: string;
  age: number;
  salary: number;
  status: string;
  role: string;
  country: string;
  createdAt: string;
  updatedAt: string;
};

//send query string
export type TQuery = {
  gender?: string;
  role?: string;
  status?: string;
  country?: string;
  limit?: string;
  page?: string;
  sort?: string;
};
