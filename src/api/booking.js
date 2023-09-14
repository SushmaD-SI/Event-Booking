const DOMAIN_URL = "http://localhost:3000";

const sports = [
  {
    id: 1,
    value: 'CRICKET',
    label: 'cricket'
  },
  {
    id: 2,
    value: 'FOOTBALL',
    label: 'football'
  },
  
]
const venues = [
  {
    id: 1,
    name: 'venue 1',
    sport: {
      id: 1,
      value: 'CRICKET',
      label: 'cricket'
    },
  },
  {
    id: 2,
    name: 'venue 2',
    sport: {
      id: 1,
      value: 'CRICKET',
      label: 'cricket'
    },
  },
  {
    id: 3,
    name: 'venue 3',
    sport: {
      id: 2,
      value: 'FOOTBALL',
      label: 'football'
    },
  },
  {
    id: 4,
    name: 'venue 4',
    sport: {
      id: 2,
      value: 'FOOTBALL',
      label: 'football'
    },
  },
  {
    id: 5,
    name: 'venue 5',
    sport: {
      id: 2,
      value: 'FOOTBALL',
      label: 'football'
    },
  },
]
const equipments = [
  {
    id: 1,
    name: 'bat',
    sport: {
      id: 1,
      value: 'CRICKET',
      label: 'cricket'
    },
  },
  {
    id: 2,
    name: 'tennis ball',
    sport: {
      id: 1,
      value: 'CRICKET',
      label: 'cricket'
    },
  },
  {
    id: 3,
    name: 'pad',
    sport: {
      id: 1,
      value: 'CRICKET',
      label: 'cricket'
    },
  },
  {
    id: 4,
    name: 'ball',
    sport: {
      id: 2,
      value: 'FOOTBALL',
      label: 'football'
    },
  },
  {
    id: 5,
    name: 'shoes',
    sport: {
      id: 2,
      value: 'FOOTBALL',
      label: 'football'
    },
  },
  {
    id: 6,
    name: 'gloves',
    sport: {
      id: 2,
      value: 'FOOTBALL',
      label: 'football'
    },
  },
]

const bookEvent = (eventData) => {
  console.log(eventData);
  alert("Event booked")
}

const getAllSports = async() => {
  return sports;
}

const getAllVenues = async() => {
  return venues;
}

const getAllEquipments = async() => {
  return equipments;
}

const getVenueBySport = async(sport) => {
  return venues.filter(venue => venue.sport.id === sport.id)
}

const getEquipmentBySport = async(sport) => {
  return equipments.filter(equipment => equipment.sport.id === sport.id);
}

export { getAllSports,getAllVenues, getAllEquipments, getEquipmentBySport, getVenueBySport, bookEvent};