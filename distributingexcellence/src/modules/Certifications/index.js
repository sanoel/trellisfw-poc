import certChecked from './signals/certChecked';
import certificationsChanged from './signals/certificationsChanged';
import yearClicked from './signals/yearClicked';

export default {
  state: {
    pendingChanges: {},
    model: {

    },
    view: {
      selectedYear: 'All'
    }
  },

  signals: {
    certChecked,
    certificationsChanged,
    yearClicked
  },
  modules: {

  },
}
