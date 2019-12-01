const cookieparser = process.server ? require('cookieparser') : undefined

const Cookie = process.client ? require('js-cookie') : undefined;
export const state = () => ({
  skills: [],
  places: [],
  interests: [],
  first_name: '',
  last_name: '',
  img: '',
  code: '',
});

export const mutations = {
  setSkills(state, skills) {
    state.skills = skills;
  },
  setPlaces(state, places) {
    state.places = places;
  },
  setInterests(state, interests) {
    state.interests = interests;
  },
  setTimes(state, times) {
    state.times = times;
  },
  setImg(state, img) {
    state.img = img;
  },
  setLastName(state, last_name) {
    state.last_name = last_name;
  },
  setFirstName(state, first_name) {
    state.first_name = first_name;
  },
  setCode(state, code) {
    state.code = code;
  },
  isAuthenticated(state, code) {
    state.authenticated = true;
  }
};

export const actions = {
  nuxtClientInit ({ commit }, context) {
    console.log(Cookie.get('code'));
    console.log(context);
    let code = '';
    let last_name = '';
    let first_name = '';
    let img = '';
    code = Cookie.get('code');
    last_name = Cookie.get('last_name');
    first_name = Cookie.get('first_name');
    img = Cookie.get('img');

    commit('setImg', img);
    commit('setFirstName',first_name);
    commit('setLastName', last_name);
    commit('setCode', code);
  }
}
