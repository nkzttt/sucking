import format from 'date-fns/format'

export const state = () => ({
  dateStr: format(new Date(), 'yyyy-MM-dd'),
  notes: { /*
    [date: string]: {
      [hour: number]: {
        [minute: number]: {
          [type in 'direct' | 'stacked' | 'milk']: number
        }
      }
    }
  */ },
});

export const mutations = {
  setDate(state, dateStr) {
    state.dateStr = dateStr;
  },
  setNotes(state, payload) {
    console.log(payload);
    // state.dateStr = dateStr;
  },
};
