  import logo2 from '../../logo2.png'
  import logo4 from '../../logo4.png'
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
        <img src={logo4} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem consequatur aliquid, odio dolor nemo corrupti sapiente sed excepturi esse aut soluta rerum voluptates recusandae alias possimus consequuntur. Corporis, in?</p>
      </div>
      <button className="button" onClick={() => setStart(true)}>
        <p>Começar</p>
      </button>
    </div> 
    )
  }
  