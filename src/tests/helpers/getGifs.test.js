import { getGifs } from "../../helpers/getGifs";

describe('test getGifs Function', () => {
    test('should return 10 items', async() => {

        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBe(10)
    });



    test('should return 0 items', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
    })
    
})
