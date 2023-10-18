export interface Item {
  _id?: string;
  title: string;
  description?: string;
  checked?: boolean;
}

export interface List {
  color?: string;
  _id: string;
  itemList: Item[];
  listname: string;
  customField?: string;
}

export interface CustomButtonElement extends HTMLButtonElement {
  currentState: string;
  selectedList: List;
  listItemsUl: HTMLUListElement;
  API_BASE: string;
  headerName: HTMLDivElement;
}