

function App() {
    const st1 = { color: ' red', backgroundColor: 'lime' }
    return (
        <div style={{
           
        }}>
            <h1 style={st1} >Chawanrat Chiarawatthanakun</h1>
            <p style={st1} >Age : {new Date().getFullYear()-new Date('1992-04-30').getFullYear()}</p>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)





// ReactDOM.createRoot(document.querySelector('#root'))
// .render(<h1>Codecamp 18 : {new Date().toTimeString()}</h1>)

// console.log(React)
// console.log(ReactDOM)