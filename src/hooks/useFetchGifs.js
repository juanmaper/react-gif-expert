import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs( category )
        setImages(newImages)
        setIsLoading(false)
        // Gracias a React 18, estos dos sets no disparan dos renderizaciones, solo 1
    }

    useEffect(() => {
        getImages()
    }, [ ])

  return {
    images,
    isLoading
  }
}


