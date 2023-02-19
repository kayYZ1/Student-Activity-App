export interface ILoadedEvents {
    id: string,
    title: string,
    description: string,
    image: string,
    address: string,
    hour: string,
    date: string
}

export interface ILoadedEventsList {
    events: ILoadedEvents[]
}