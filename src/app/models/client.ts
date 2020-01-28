export interface IAddress {
  street: string;
  city: string;
  zip: string;
}

export interface IClient {
  _id: string;
  firstName: string;
  lastName: string;
  title: number;
  initials: string;
  address: IAddress;
  phone: number;
  business: boolean;
  iban: string;
  startDate: Date;
  active: boolean;
}
