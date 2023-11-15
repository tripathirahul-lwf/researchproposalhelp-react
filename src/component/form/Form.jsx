import React, { useEffect } from 'react'

const Form = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://forms.app/static/embed.js";
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {
            var formsappForm = new window.formsapp('6540daeb4c0303782e76c664', 'standard', { "width": "100%", "height": "500px", "opacity": 0 });
        }
    }, [])
    return <div formsappId="6540daeb4c0303782e76c664" ></div>;
}

export default Form
