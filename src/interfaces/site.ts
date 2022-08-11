export interface Site {
  _id: string
  data: Data
  route: Children[]
  client: string
  type: string
  domain: string
}
export interface Data {
  title: string;
  logo: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  numberPhone: number;
  address: string;
  location: string;
  description: string;
}

export interface Children {
  uid: string;
  name: string;
  href: string;
  description: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  content: Content;
  // items?: Item[];
  // featured?:Featured[];
  children:Children[];
}
export interface Content {
  header: Header;
  body: Body;
}
export interface Header {
  title: string;
  imageSrc: string;
  imageAlt: string;
}
export interface Body {
  h1: string;
  span: string;
  p: string;
  imageSrc: string;
  imageAlt: string;
  button: string[];
}
export interface SiteForm {
  _id?: string
  title: string;
  domain: string;
  logo: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  numberPhone: number;
  address: string;
  location: string;
  description: string;
  type: string;
  client: string;
}
export interface ChildrenForm {
  uid?: string
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

// export interface Route {
//   section_level_0: Section0[];
// }

// export interface Section {
//   id: string;
//   name: string;
//   href: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
//   items: Item[];
//   featured:Featured[];
// }

// export interface Section0 extends Section {
//   section_level_1: any
// }
// export interface Section1 extends Section0 {
//   section_level_2: any
// }
// export interface Section2 extends Section1 {
//   section_level_3: any
// }
// export interface Section3 extends Section2 {
//   section_level_4: any
// }
// export interface Section4 extends Section3 {
//   section_level_5: any
// }
// export interface Section5 extends Section4 {
//   section_level_6: any
// }
// export interface Featured {
//   uid: string;
//   name: string;
//   href: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
// }
// export interface Item {
//   uid: string;
//   name: string;
//   href: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
// }