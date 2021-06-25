import './App.css';
import { useState } from 'react'

function App() { 
      const [mode, setMode] = useState('day')   

// SI ON VOULAIT DETERMINER LE MODE EN FONCTION DE LHEURE COURANTE
    // const today = new Date();
    // console.log('DATE NOW', today.getHours())
    // if (today.getHours() > 21 || today.getHours() < 6) {
    // setMode('night')
    
    return (
        <div >
            <div onClick={() => {
                if (mode === 'day') {
                    setMode('night')
                } else {
                    setMode('day')
                }
            }} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
            </div>
            <div className={mode === 'day' ? 'homeDay' : 'homeNight'} >HOME</div>
            <div className={mode === 'day' ? 'footerDay' : 'footerNight'} >FOOTER</div> 
            
            </div>
    )
}

export default App;