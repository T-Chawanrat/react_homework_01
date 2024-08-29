ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)


function App() {
    return (
        <div style={{
            border: '1px solid gray',
            borderRadius: '20px',
            textAlign: 'center',
            width: '500px',
            padding: '25px',
            boxShadow: ' 5px 5px 20px gray',
            display: 'flex',
            flexDirection: 'column',
            margin:'auto'
            
        }}>
            <Pic />
            <Name />
            <Followers />
        </div>
    )
}
function Pic() {
    return (
        <div style={{

        }}>
            <img className='pic' src='https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80' />
        </div>
    )
}

function Name() {
    return (
        <div>
            <p className='name'><b>Julienne Moore</b></p>
            <p className='name2'>Julienne.Moore@company.com</p>
        </div>
    )
}

function Followers() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'baseline'
        }}>
            <p><b>25</b><br />Posts</p>
            <p><b>350</b><br />Following</p>
            <p><b>1.5K</b><br />Followers</p>
        </div>
    )
}
function Followers() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'baseline'
        }}>
            <p><b>25</b><br />Posts</p>
            <p><b>350</b><br />Following</p>
            <p><b>1.5K</b><br />Followers</p>
        </div>
    )
}



