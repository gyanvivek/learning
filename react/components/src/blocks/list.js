
const List = ({list,renderItem})=>{
   return (list?list.map((iitem,index)=>renderItem(iitem,index)):null)
}

export const List;