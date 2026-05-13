import React,{useState} from 'react'

function DropDownBox(props) {
    const [dropOpen , setDropOpen] = useState(false)
  return (
    <div
      className={`dropdown-box container my-3`}
      onClick={() => {
        setDropOpen((prev) => {
          return !prev;
        });
      }}
      style={dropOpen ? {backgroundColor:"#E3E3E3"}:{backgroundColor:"white"}}
    >
      <div className="box-head d-flex align-items-center justify-content-between gap-3">
        <h5 className="title mb-0" style={dropOpen ? {color:"#171717"}:{}}>{props.title}</h5>
        <img src={dropOpen ? '/images/icons/dropdown-less.svg':'/images/icons/dropdown-add.svg'} alt='arrow' className='eye-icon'/>
      </div>
      <div className="box-content my-4" style={dropOpen?{animation:"bottomBoxOpen .6s ease-in-out",display:"block"}:{display:"none"}}>
          <p className='mb-0' dangerouslySetInnerHTML={{__html:props?.content}}></p>
      </div>
    </div>
  );
}

export default DropDownBox