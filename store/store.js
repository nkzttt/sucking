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
  setNotes(state, { hour, minute, type, value }) {
    const newNotes = { ...state.notes };

    if (!newNotes[state.dateStr]) newNotes[state.dateStr] = {};
    if (!newNotes[state.dateStr][hour]) newNotes[state.dateStr][hour] = {};
    if (!newNotes[state.dateStr][hour][minute]) newNotes[state.dateStr][hour][minute] = {};
    if (!newNotes[state.dateStr][hour][minute][type]) newNotes[state.dateStr][hour][minute][type] = 0;
    newNotes[state.dateStr][hour][minute][type] += value;
    state.notes = newNotes;
  },
};
