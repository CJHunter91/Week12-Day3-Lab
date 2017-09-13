use bucket_list;

db.countries.drop();

db.countries.insert([
  {
    name: 'France',
    latlng: [46, 2]
  },
  {
    name: 'Afghanistan',
    latlng: [33, 65]
  },
  {
    name: 'Isle of Man',
    latlng: [54.25, -4.5]
  }
]);