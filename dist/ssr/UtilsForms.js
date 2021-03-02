'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var cloneDeep = _interopDefault(require('lodash-es/cloneDeep'));

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

exports.removeModel = removeModel;
exports.setCurrentModel = setCurrentModel;
exports.setupPendingChangesGuard = setupPendingChangesGuard;
exports.updateSnapshotModel = updateSnapshotModel;
