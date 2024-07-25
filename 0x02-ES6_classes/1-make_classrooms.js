import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const fontSize = [19, 20, 34];
  return fontSize.map((size) => new ClassRoom(size));
}
