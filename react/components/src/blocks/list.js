
const List = ({list,renderItem})=>{
   return (list?list.map((item,index)=>renderItem(item,index)):null)
}

export default List;