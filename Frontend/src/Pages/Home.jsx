import Welcome from '../Welcome'
import Skills from '../Skills'

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Welcome name="virat" country="India" />
      <Skills skill={['React', 'Node', 'Express', 'MongoDb']} />
      <h1>Hello World</h1>
    </div>
  )
}
export default Home