import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('Test <AddCategory/> component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    } );

    test('should be render correctly', () => {

        

        expect(wrapper).toMatchSnapshot();
        
    });


    test('should change inputtext', () => {
        const input = wrapper.find('input');

        const value = 'Hola';

        input.simulate('change', {target: {
            value
        }} );
        
    });


    test('should validate submit no value', () => {
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
        
    });
    
    
    
    
})
