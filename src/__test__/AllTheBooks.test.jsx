import {render,screen} from '@testing-library/react'
import AllTheBooks from "../components/AllTheBooks"

test ('tutte le card', ()=>{
    render(<AllTheBooks/>)
    const cards = screen.getAllByRole('img');
    expect(cards).toHaveLength(150)
})