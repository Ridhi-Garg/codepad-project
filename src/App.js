import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

function App() {
   return (
    <div className="container">
      <Header/>
      <div>
      <Sidebar/>
      <Editor/>
      </div>
    </div>
  );
}
export default App;
