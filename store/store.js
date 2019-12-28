import format from 'date-fns/format'

export const state = () => ({
  dateStr: format(new Date(), 'yyyy-MM-dd'),
});

export const mutations = {
  setDate(state, dateStr) {
    state.dateStr = dateStr;
  }
};
