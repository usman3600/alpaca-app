import html2canvas from "html2canvas"
import downloadjs from "downloadjs"

const DownloadImg = async () => {
    const  canvas = await html2canvas(document.getElementById("alpacaCanvas"));
    const dataURL = canvas.toDataURL("image/png")
    downloadjs(dataURL, "image.png", "image/png")
}
 

const CustomizeRandImg = (assets, set) => (event) =>{
    const randomImgPath = GetRandImg(assets);
    randomImgPath.map((path) =>
        ImportImgs(path, set)
    )

}
const ImportImgs = (path, set) =>{
    const sliced = path.split("/")
    let list = set[sliced[2]]
    let func = list[1]
    import(`../alpaca/${sliced[2]}/${sliced[3]}`).then((img) =>{
        func(img.default)
   })
}
const GetRandImg = (assets) =>{
    let folders = ["accessories", "backgrounds",
        "ears", "eyes", "hair", "leg", "mouth", "neck",
        "nose"
    ]
    let selectedRanImg = []
    folders.map((single) =>
        selectedRanImg.push(GetPathList(assets, single))
    )
    return selectedRanImg
}
const GetPathList = (assets, folder) => {
        let files = Object.values(assets[folder])
        let RandNum = Math.floor(Math.random() * files.length)
        let selectRandFile = files[RandNum]
        return selectRandFile
}

function RandomButtons(props){
    let butt = "Random"
    return(
            <>
              <button onClick={props.code}
                id={butt}
                key={butt}
                type="button"
                className="action-button"
                >
                    {butt}
                </button>
        </>)
}

function DownloadButtons(props){
    let butt = "Download"
    return(
            <>
              <button onClick={props.code}
                id={butt}
                key={butt}
                type="button"
                className="action-button"
                >
                    {butt}
                </button>
        </>)
}


export {RandomButtons, DownloadButtons, CustomizeRandImg, DownloadImg}

