
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

export function getStaticProps(){
    const staticDate = new Date()
    const staticDateString = dynamicDate.toGMTString()

    return {
        props: {
            staticDateString
        }
    }

}