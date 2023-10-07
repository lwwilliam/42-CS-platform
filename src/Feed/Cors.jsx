import React, { useRef, useEffect } from 'react';

const Testing = () => {

	const canvasRef = useRef(null)
	
  
	useEffect(() => {
	  const canvas = canvasRef.current
	  canvas.width = 100
	  canvas.height = 100
  
	  const context = canvas.getContext('2d')
	  const image = new Image()
	  image.src= "https://scontent-kul2-1.cdninstagram.com/v/t51.2885-15/354796451_636792911758123_3990836767433140561_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-kul2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=GjL2KlvdMvEAX_M8-TS&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCrewmo8KRz_0NFciA4e0S0wYXP80ej_RGGV1v9WwyY6Q&oe=65266B18&_nc_sid=8b3546"
	  image.crossOrigin = "Anonymous";
	  image.onload = () => {
		context.drawImage(image , 0 , 0 , canvas.width , canvas.height)
		console.log(context.getImageData(0, 0, canvas.width , canvas.height).data.length)
	  }
	   
	}, [])
  
	return (
	  <>
		<canvas ref={canvasRef}>
  
		</canvas>
	  </>
	)
  }

export default Testing;
