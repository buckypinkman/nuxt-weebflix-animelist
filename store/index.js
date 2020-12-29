import Vuex from 'vuex'
const store = () => {
  return new Vuex.Store({
    state() {
      return {
        upcoming: "",
        airing: "",
        topTv: "",
        topMovie: "",
        details: "",
        isLoading: false
      }
    },
    actions: {
      async getUpcoming({ state }) {
        state.isLoading = true
        try {
          const res = await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming");
          const data = await res.json();
          state.upcoming = data.top;
          
          state.isLoading = false
          // console.log(data);
  
        } catch (err) {
          console.log(err);
        }
      },
  
      async getAiring({ state }) {
        state.isLoading = true
        try {
          const res = await fetch("https://api.jikan.moe/v3/top/anime/1/airing");
          const data = await res.json();
          state.airing = data.top;
          
          state.isLoading = false
          // console.log(data);
  
        } catch (err) {
          console.log(err);
        }
      },
  
      async getTopTv({ state }) {
        state.isLoading = true
        try {
          const res = await fetch("https://api.jikan.moe/v3/top/anime/1/tv");
          const data = await res.json();
          state.topTv = data.top;
  
          state.isLoading = false
          // console.log(data);
  
        } catch (err) {
          console.log(err);
        }
      },
  
      async getTopMovie({ state }) {
        state.isLoading = true
        try {
          const res = await fetch("https://api.jikan.moe/v3/top/anime/1/movie");
          const data = await res.json();
          state.topMovie = data.top;
  
          state.isLoading = false
          // console.log(data);
  
        } catch (err) {
          console.log(err);
        }
      },
    }
  })
}

export default store