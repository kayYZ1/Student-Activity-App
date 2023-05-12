export interface ILoadedEvents {
  _id: string;
  title: string;
  description: string;
  image: string;
  address: string;
  hour: string;
  date: string;
}

export interface ILoadedEventsList {
  events: ILoadedEvents[];
}

export interface INewEventValues {
  title: string;
  description: string;
  image: string;
  address: string;
  hour: string;
  date: string;
}

export interface IMarkedEventsContext {
  marked: ILoadedEvents[];
  numberOfMarked: number;
  addMarked: any;
  removeMarked: any;
  eventIsMarked: any;
}

export interface INewEventFormSubmit {
  onSubmit: (formValue: INewEventValues) => void;
}
