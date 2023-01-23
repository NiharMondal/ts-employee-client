//drawer width
export const DRAWER_WIDTH = 300;

//nav link data
type NavProps = {
  title: string;
  path: string;
}[];
export const nav: NavProps = [
  {
    title: "Add Users",
    path: "/admin/add",
  },
];
// select options props
type SelectOptionsProps = {
  value: string;
  label: string;
}[];
export const selectOptions: SelectOptionsProps = [
  { label: "User", value: "User" },
  { label: "Moderator", value: "Moderator" },
  { label: "Editor", value: "Editor" },
];

export const selectOccupation: SelectOptionsProps = [
  { label: "Web Developer", value: "Web Developer" },
  { label: "Engineer", value: "Engineer" },
  { label: "Doctor", value: "Doctor" },
  { label: "Ethical Hacker", value: "Ethical Hacker" },
];

export interface UserProps {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  gender: string;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  address: {
    city: string;
    country: string;
  };

  role: string;
  profession: string;
  createdAt?: string;
}

export type ResponseUser = {
  user: UserProps;
  success: string;
};
