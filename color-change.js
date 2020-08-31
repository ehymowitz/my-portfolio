export default function colorChange(logo, color){
  logo.style.boxShadow = `0px 0px 10px 8px ${color}`
  logo.style.backgroundColor = color
  setTimeout(() => {
      logo.style.backgroundColor = "rgba(0,0,0,0)"
      logo.style.boxShadow = `0px 0px 0px 0px ${color}`
    }, 500)
}
