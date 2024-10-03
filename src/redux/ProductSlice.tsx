const{createSlice,createAsyncThunk} =require('@reduxjs/toolkit');
import { fetchProducts } from "../FetchProducts";



const ProductSlice = createSlice({
    name:'products',
    initialState:
    {
        data:null,
        isLoader:false,
        isError:false,
    },
    extraReducers: (builder:any) => {
        builder.addCase(fetchProducts.pending,(state:any)=>{
            state.isLoader =true;
        })
        builder.addCase(fetchProducts.fulfilled,(state:any,action:any)=>{
            state.isLoader =false;
            state.data = action.payload;
        })
        builder.addCase(fetchProducts.rejected,(state:any)=>{
            state.isLoader =false;
            state.isError=true;                                                                                                                                                                                                                                                                          
        });
    },
});

export default ProductSlice.reducer;