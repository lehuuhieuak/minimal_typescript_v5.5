import { IAddressItem } from './address';

// ----------------------------------------------------------------------

export type IInvoiceTableFilterValue = string | string[] | Date | null;

export type IInvoiceTableFilters = {
  name: string;
  service: string[];
  status: string;
  startDate: Date | null;
  endDate: Date | null;
};

// ----------------------------------------------------------------------

export type IInvoiceItem = {
  id: string;
  title: string;
  price: number;
  total: number;
  service: string;
  quantity: number;
  description: string;
};

export type IInvoice = {
  id: string;
  sent: number;
  dueDate: Date;
  taxes: number;
  status: string;
  subTotal: number;
  createDate: Date;
  discount: number;
  shipping: number;
  totalAmount: number;
  invoiceNumber: string;
  items: IInvoiceItem[];
  invoiceTo: IAddressItem;
  invoiceFrom: IAddressItem;
};

export type IInvData = {
  sid: string;
  idt: Date;
  type:string;
  form:string;
  serial:string;
  seq: number;
  bcode:string;
  bname:string;
  buyer:string;
  btax:string;
  baddr:string;
  btel:string;
  bmail:string;
  paym:string;
  curr:string;
  exrt: number;
  bacc:string;
  bbank:string;
  note:string;
  sumv: number;
  sum: number;
  vatv: number;
  vat: number;
  word:string;
  totalv: number;
  total: number;
  tradeamount: number;
  discount:string;
  aun: number;
  sign: number;
  type_ref: number;
  listnum:string;
  listdt:string;
  sendtype: number;
  items_line: number;
  items_type:string;
  items_vrt: number;
  items_code:string;
  items_name:string;
  items_unit:string;
  items_price: number;
  items_quantity: number;
  items_perdiscount: number;
  items_amtdiscount: number;
  items_amount: number;
  items_vat: number;
  items_total: number;
  stax:string;
  c0:string;
  branchid:string;
  tellerId:string;
  seqNo:string;
  time:string;
  appSrc:string;
};
