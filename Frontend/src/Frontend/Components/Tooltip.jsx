
 
 export default function Tooltip(Prop){

  

  return(
    <div className={` flex-center shadow-sm border border-gray-200 border-l-3 border-l-gradient1
    transition-all ease-in duration-75 ${Prop.state ? 'opacity-100 scale-100': 'opacity-0 scale-0'} bg-smoothWhite rounded-lg absolute z-10 ${Prop.Pos ==='Left' ? 'right-12 top-[50%] transition-all -translate-y-[50%]':'-bottom-11 right-[50%] transition-all translate-x-[50%]'}  `}>
      <div className={`w-2 h-2 absolute ${Prop.Pos ==='Left' ? '-right-1 top-1/2 -translate-y-1/2':'-top-2 left-1/2 -translate-x-1/2'}  rotate-45 bg-myblack`}></div>
      <span className="text-xs font-medium p-2 px-4 rounded-lg">{Prop.Tip}</span>
    </div>
  )
 }