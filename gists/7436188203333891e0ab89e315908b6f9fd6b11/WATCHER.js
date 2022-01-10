var WATCHER = function(oldValues, newValues, map) {
  var changes, index, value;
  changes = {};
  if (Array.isArray(oldValues)) {
    for (index in oldValues) {
      value = oldValues[index];
      if (value !== newValues[index]) {
        changes[map[index]] = {
          oldVal: oldValues[index]
          newVal: newValues[index]
        };
      }
    }
  } else {
    if (oldValues !== newValues) {
      changes[map] = newValues;
    }
  }
  return changes;
};