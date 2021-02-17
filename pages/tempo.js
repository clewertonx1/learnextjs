
export default function Home(props) {
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return (
        <div>
            <div>
                {dynamicDateString} (dinamico)
            </div>
            <div>
                {props.staticDateString} (estatico)
            </div>
            
        </div>
    )
  }

export async function getStaticProps(){
    console.log("delay 5 seg")

    // await delay(5000)
    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return {
        props: {
            staticDateString
        }
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))