const CustomizeImg = (states) => (event) => {
    const location = event.target.value;
    const customize = event.target.className;
    let list = states[customize]
    console.log(states)
    GetImg(location, list[1])
}



const GetImg = (location, setFunction) => {
        const sliced = location.split("/")
        import (`../alpaca/${sliced[2]}/${sliced[3]}`).then((img) =>{
            setFunction(img.default)
        })
}
const ImageMaker = ({imgData}) =>{
    return (
        <div id="alpacaCanvas" className="alpaca-image"
        style={
            {
                width:"450px",
                height:"450px",
            }
        }
        >
            {Object.keys(imgData).map((image) =>{
                return(
                    <img 
                    src={imgData[image][0]}
                    key={image}
                    alt={image}
                    id={image}
                    style={{position:"absolute", width:"450px"}}
                    >
                    </img>
                )
            })}
        </div>
    )
}

export {ImageMaker, CustomizeImg}