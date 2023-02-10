//drawer width
export const DRAWER_WIDTH = 300;

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
export const initialState:TUser = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  gender: "",
  age: "",
  role: "",
};



//initial state types
export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  gender: string;
  age: string;
  role: string;
};



export type TUserResponse = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  gender: string;
  age: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};




