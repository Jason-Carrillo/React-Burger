import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('<Navigationitems />', () => {
    it('should render two <NavigationItem /> elements if not authenticated', () => {

    });
});