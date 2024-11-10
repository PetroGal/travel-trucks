import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${params}`
      )
      const data = await response.json()

      if (!Array.isArray(data.items)) {
        throw new Error("No campers found")
      }
      return data.items
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch campers")
    }
  }
)

const initialState = {
  campers: [],
  filters: {
    location: "",
    bodyType: "",
    equipment: [],
  },
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
}

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    updateFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload }
      state.page = 1
      state.campers = []
    },
    setPage(state, action) {
      state.page = action.payload
    },
    setHasMore(state, action) {
      state.hasMore = action.payload
    },
    clearCampers(state) {
      state.campers = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false
        state.campers = [...state.campers, ...action.payload]
        if (action.payload.length === 0) {
          state.hasMore = false
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { updateFilters, setPage, setHasMore, clearCampers } =
  campersSlice.actions
export default campersSlice.reducer
