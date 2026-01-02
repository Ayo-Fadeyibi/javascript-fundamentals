// 18-record-collection-updater.js

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // If value is empty, remove the property
  if (value === "") {
    delete records[id][prop];
    return records;
  }

  // If prop is not tracks, update it directly
  if (prop !== "tracks") {
    records[id][prop] = value;
    return records;
  }

  // If prop is tracks, ensure it exists then add value
  if (!records[id].hasOwnProperty("tracks")) {
    records[id].tracks = [];
  }

  records[id].tracks.push(value);
  return records;
}

// Test cases
updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 2548, "tracks", "Wild Night");

console.log(recordCollection);
