import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Dashboard from './screens/Dashboard'
import LoginScreen from './screens/LoginScreen'
import OptionDetails from './screens/OptionDetails'


function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/' component={LoginScreen} exact/>
          <Route path='/dashboard' component={Dashboard} exact/>
          <Route path='/option/:id' component={OptionDetails} exact/>
        </Container>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
