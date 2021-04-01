import './App.css';
import Profile from './components/Profile'
function App() {
  const handlesalert = a => alert(a);
  return (
    <div className="App"  >
   <Profile  fullName="gahyth" bio="student_go_mycode" profession="student" alert={handlesalert} >

    <img src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/133927637_3642266239184855_6336776256050467088_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Sy9LaB1Jy7UAX_YbuLE&_nc_ht=scontent.fnbe1-2.fna&oh=622b3dbe1d3c59961326b71ee758d82f&oe=60892FCD" style={{width:"250px", height:"400px"}} />

    </Profile>
    </div>
  );
}

export default App;
