import { Routes, Route } from 'react-router'
import Home from './Home/Home'
import About from './About/About'
import Members from './Members/Members'
import SingleMember from './SingleMember/SingleMember'
import StripTrip from './StripTrip/StripTrip'
import StripShkola from './StripShkola/StripShkola'
import Reader from './Reader/Reader'


function App() {

  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/нашата-приказна' element={<About />} />
    <Route path='/членови' element={<Members />} />
    <Route path='/член/:id' element={<SingleMember />} />
    <Route path='/СтрипТрип' element={<StripTrip />} />
    < Route path='/стрип-школа' element={<StripShkola/>} />
    < Route path='/стрип-од-конкурс/:id' element={<Reader />} />
    </Routes>  

  )
}

export default App

//ImageKit: https://imagekit.io/dashboard/media-library/detail/68d1a61b5c7cd75eb89db1d6
//Онлајн читач: https://www.dargaud.com/bd-en-ligne/les-arcanes-de-la-lune-noire-tome-4/3219/453679b73e7220bffa7af04fa0b856a7



//Live link: https://mak-stripovi-proben.netlify.app/