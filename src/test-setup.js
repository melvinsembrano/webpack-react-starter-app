import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const raf = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0)
}

Enzyme.configure({ adapter: new Adapter() })
