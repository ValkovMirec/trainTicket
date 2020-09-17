import { format, add, eachDayOfInterval } from "date-fns";

export default function dateInterval() {
  const addedDate = add(new Date(), { days: 30 });
  const dateInterval = eachDayOfInterval({
    start: new Date(),
    end: addedDate,
  });
  const mappedInterval = dateInterval.map((arr) => {
    return format(arr, "do MMM EEEEEE");
  });
  return mappedInterval;
}
