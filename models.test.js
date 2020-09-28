const {Restaurant, Menu, Item} = require('./model')

describe('Restaurant', () => {
    test('has a name', () => {
        const restaurant = new Restaurant({name:'Amber'})
        expect(restaurant.name).toEqual('Amber')
        expect(restaurant.image).toEqual('http://image.url')
    })

    test('must have a name', () => {
        expect(() => {new Restaurant({})}).toThrow()

    })
    test('can add a menu', () => {
        const restaurant = new Restaurant({name:'Amber'})
        const menu = new Menu ('Mains')
        restaurant.addMenu(menu)
        expect(restaurant.menus[0]).toEqual(menu)

    })
})
    
describe('Menu', () => {
    test('has a title', () => {
        const menu = new Menu ('Mains')
        expect(menu.title).toBe('Mains')
        expect(Array.isArray(menu.items)).toBeTruthy()
    })
    test('must have a title', () => {
        expect(() => {new Menu()}).toThrow()
    })
    test('can add an item', () => {
        const menu = new Menu ('Mains')
        const item = new Item ({name: 'pizza', price: 5})
        menu.addItem(item)
        expect(menu.items[0]).toEqual(item)
    })
})

describe('Item', () => {
    test('has a name and price', () => {
        const item = new Item ({name: 'pizza', price: 5})
        expect(item.name).toBe('pizza')
        expect(item.price).toEqual(5)
    })
    test('must have a name and price', () => {
        expect(() => {new Item({})}).toThrow
    })
})