import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('test GifGridItem', () => {


    const properties = {
        title: "naruto shippuden GIF",
        url: "https://media3.giphy.com/media/4gsjHZMPXdlGo/giphy.gif?cid=b3da8313ttx2xt6c4wdcqokp6mxlu2l93im34kr66cvylucq&rid=giphy.gif&ct=g"
    }

    const wrapper = shallow(<GifGridItem  {...properties}/>);

    test('should render item correctly ', () => {

     
        
        expect(wrapper).toMatchSnapshot();
    });
    

    test('should contain title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(properties.title);

    });

    test('should url image equals to url properties', () => {
        const img = wrapper.find('img');
        
        expect(img.prop('src')).toBe(properties.url);
        expect(img.prop('alt')).toBe(properties.title);

    });


    test('should contains image class', () => {

        const div = wrapper.find('div');
        const className = 'card animate__animated animate__fadeInUp';
        expect(div.prop('className')).toBe(className);

        expect( div.prop('className').includes('animate__fadeInUp') ).toBe(true);

        
    })
    
    
    
    
})
