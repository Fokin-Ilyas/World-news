import { createSlice, current } from '@reduxjs/toolkit'

const worldNews = createSlice({
    name: 'world_news',
    initialState: {
      world_news: [
        {
          id: 1,
          active: true,
          title: 'general',
          news: [
            
          ]
        },
        {
          id: 2,
          active: false,
          title: 'business',
          news: [
            
          ]
        },
        {
          id: 3,
          active: false,
          title: 'entertainment',
          news: [
            
          ]
        },
        {
          id: 4,
          active: false,
          title: 'health',
          news: [
            
          ]
        },
        {
          id: 5,
          active: false,
          title: 'science',
          news: [
            
          ]
        },
        {
          id: 6,
          active: false,
          title: 'sports',
          news: [
            
          ]
        },
        {
          id: 7,
          active: false,
          title: 'technology',
          news: [
            
          ]
        }
      ]
    },

    reducers: {
        toggleTabs(state, action) {
            const { title, cards } = action.payload
            let indx
            state.world_news.forEach((tab, i) => {
              if (tab.title == title.toLowerCase()) {
                indx = i
              }
            })
            state.world_news[indx].news = cards
            const copyWorldNews = structuredClone(current(state.world_news))

            state.world_news = copyWorldNews.map(tab => {
              if (tab.title == title.toLowerCase()) {
                tab.active = true
                return tab
              } else {
                tab.active = false
                return tab
              }
            })
        }
    }
})

export const {
  toggleTabs
} = worldNews.actions
export default worldNews.reducer
