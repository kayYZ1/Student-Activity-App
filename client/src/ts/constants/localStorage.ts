const markedEventsLocalStorage: any = localStorage.getItem("markedEvents");
export const markedEventsLocalStorageParsed = JSON.parse(
  markedEventsLocalStorage
);
