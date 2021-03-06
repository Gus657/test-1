import cloneDeep from 'lodash-es/cloneDeep';

const modelSnapshots = [];
const modelCurrent = [];

const isTherePendingChanges = () => {
  for (var model in modelCurrent) {
    if (modelCurrent.hasOwnProperty(model)) {
      const snap = modelSnapshots[model];
      const cur = modelCurrent[model];

      if (JSON.stringify(snap) !== JSON.stringify(cur)) {
        return true;
      }
    }
  }

  return false;
};

const setCurrentModel = model => {
  modelCurrent[model.key] = cloneDeep(model.data);
};
const updateSnapshotModel = model => {
  modelSnapshots[model.key] = cloneDeep(model.data);
};
function removeModel(key) {
  delete modelSnapshots[key];
  delete modelCurrent[key];
}
function setupPendingChangesGuard() {
  window.onbeforeunload = function () {
    if (isTherePendingChanges()) {
      return true;
    }
  };

  window.addEventListener('mdDialogClose', function (event) {
    if (isTherePendingChanges()) {
      event.preventDefault();
    }
  });
  return (to, from, next) => {
    if (isTherePendingChanges()) {
      if (confirm('Changes you made may not be saved.')) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  };
}

export { removeModel, setCurrentModel, setupPendingChangesGuard, updateSnapshotModel };
