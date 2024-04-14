Explanation
For Redux code
Function ke andar object bnana hai usme 3 chiz pass karni h
check counterslice.jsx for code
1) name
2) Initial State 
3) reducers -> define functionality 

4) jitne bhi functions likho uske action creator bn jate hai by default,
   inn function ke implementation ko slice me se bahar nikalna hai uska syntax.
   Export functions from counterslice.actions
5) slice ko export bhi karna padega
   export default CounterSlice.reducer;

6) Store -> multiple slices se bnta hai ek store. uss slice ke reducer ko call krna h.
7) kisi slice ki particular value chahiye toh useSelector (counter.jsx)

8) Flow -> jab bhi state ko fetch krne ki koshish kro toh phle  store fir slice ke paas jati hai    
9) Createslice me function bna hai lekin agar call krna hai counter.jsx toh useDispatch hook use hoga