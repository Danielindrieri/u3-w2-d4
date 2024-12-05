import { render, screen } from '@testing-library/react'
import Welcome from "../components/Welcome";


test ('Benvenuti in EpiBooks!',()=>{
    render(<Welcome />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument() 
    expect(h1).toHaveTextContent('Benvenuti in EpiBooks!')
})