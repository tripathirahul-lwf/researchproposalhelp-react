import React, { useEffect } from 'react'

const Form = () => {
    useEffect(() =>{
        const script = document.createElement('script');
        script.src = "https://forms.app/static/embed.js"
        script.async = true;

        document.body.appendChild(script);

        script.onload = () =>{
            var formsappForm = new window.formsapp('65117e3a5e2b7cb187f19c02', 'standard', { "width": "100vw", "height": "500px" })
        }
    },[])

    return (
        <div formsappId="65117e3a5e2b7cb187f19c02"></div>
    )
}

export default Form
