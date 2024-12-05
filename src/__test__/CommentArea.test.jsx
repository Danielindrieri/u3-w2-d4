import {render,screen} from '@testing-library/react'
import CommentArea from '../components/CommentArea';

test ('renderizza componente', ()=>{
    render(<CommentArea/>)
    const Component = screen.getByTestId('element');
    expect(Component).toBeInTheDocument()
})