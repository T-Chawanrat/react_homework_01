function App() {
    const st1 = { color: ' white' }
    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#23272F',
            color: 'white',
        }}>
            <h1 >Quick Start</h1>
            <p >Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <div style={{ backgroundColor: '#343A46', padding: '40px', margin: '20px', borderRadius: '20px' }}>
                You will learn
                <ul>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)





// ReactDOM.createRoot(document.querySelector('#root'))
// .render(<h1>Codecamp 18 : {new Date().toTimeString()}</h1>)

// console.log(React)
// console.log(ReactDOM)