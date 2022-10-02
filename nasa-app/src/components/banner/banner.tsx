  
  type Props = {
    setStart: (value: boolean) => void
    isStart?: boolean
    
  
}
  
  export const Banner = ({
    setStart,
    isStart
  }: Props) => {
    return (
    isStart? <></> : <div>

      <div className="banner">
        <p font-size="34px"><span><strong>HABIT</strong></span>at</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem consequatur aliquid, odio dolor nemo corrupti sapiente sed excepturi esse aut soluta rerum voluptates recusandae alias possimus consequuntur. Corporis, in?</p>
      </div>
      <button background-color="black" color="white" onClick={() => setStart(true)}>
        <p>Começar</p>
      </button>
    </div> 
    )
  }
  