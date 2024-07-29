import { eventsData } from './content/events.content';

const currentEvent: any = eventsData.find((event) => event.current);

const isEventAvailable = (event: string) => {
  if (!event) return true;
  return new Date(event) >= new Date();
};

export const event = {
  title: currentEvent.metaHead.toUpperCase(),
  img: currentEvent.bannerDialogImg,
  link: `/${currentEvent.link}`,
  enabled: isEventAvailable(currentEvent.countdownDate),
};
