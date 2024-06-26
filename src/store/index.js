import { configureStore } from '@reduxjs/toolkit'
import worldNews from './worldNewsSlice'

export default configureStore({
    reducer: {
        world_news: worldNews
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: [
                'boards/toggleTabs',
            ],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            // Ignore these paths in the state
            ignoredPaths: ['items.dates'],
          },
        }),
})
