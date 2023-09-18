import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card';


const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;


function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
   axios.get(URL)
   .then(res => {
    console.log(res.data)
    setApod(res.data)
   })
   .catch(err => {
    console.log(err.message)
   })

    }
  fetchPhoto()
   setApod({
         date: "2023-09-09",
         explanation:
           "Comet Nishimura is growing. More precisely, the tails C/2023 P1 (Nishimura) are growing as it nears the Sun. Discovered only last month, the comet is already near naked eye brightness as it now moves inside the Earth's orbit.  The comet will be nearest the Earth next week, but nearest the Sun the week after -- on September 17.  Speculation holds that expelled ice and dust from Comet Nishimura's last visit to the inner Solar System may have created the Sigma Hydrids meteor shower which peaks year...",
         hdurl:
           "https://apod.nasa.gov/apod/image/2309/Nishimura_Kennett_4428.jpg",
         media_type: "image",
         service_version: "v1",
         title: "Comet Nishimura Grows",
         url: "https://apod.nasa.gov/apod/image/2309/Nishimura_Kennett_1080.jpg"
  })
}, [])

if(!apod) return 'Fetching photo of the day...'

  return (
   <section>
    <Card 
    title={apod.title}
    text={apod.explanation}
    imageURL={apod.url}
    date={apod.date}
    />
   </section>
  )
}

export default App
