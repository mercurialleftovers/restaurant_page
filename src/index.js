import css_style                       from './style.css'
import restaurant_img                  from './krusty_krab.png'
import burger_img                      from './burger.png'
import { clog, select }                from './tools'


let buttonToDivMap = new Map()

buttonToDivMap.set('#home',  '#home_content')
buttonToDivMap.set('#menu',  '#menu_content')
buttonToDivMap.set('#about', '#about_content')

// creating an img element for the cursor img
const cursor_img = document.createElement('img')
cursor_img.src = burger_img

let lastSelectedKey = '#home'
select(lastSelectedKey) . appendChild(cursor_img) // the cursor_img is added to the default div initially

for (let key of buttonToDivMap.keys())
{
    
    select(key) . addEventListener('click', e => {
        clog(`clicked ${key}, lasSelectedKey: ${lastSelectedKey}`)

        // removing the last selected element from display
        select(buttonToDivMap.get(lastSelectedKey)) . style['display'] = 'none'
        // updating the last selected element
        lastSelectedKey = key
        // adding the respective div of the clicked trigger to the display
        select(buttonToDivMap.get(key)) . style['display'] = 'block'

        // adding the cursor img to the clicked div
        select(key) . appendChild(cursor_img)
    })
    
    // setting all the other divs as hidden by default, except for the default div
    if (key != lastSelectedKey)
    {
        select(buttonToDivMap.get(key)) . style['display'] = 'none'
    }
}

/*
    TODO: figure out an alternative way of hiding/showing divs, the display property seems counter-intuitive
*/
