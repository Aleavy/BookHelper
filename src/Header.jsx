import {Btn} from './Btn'

export function Header(){
    return(
        <header className="flex flex-row h-full max-h-32 justify-around p-8 box-border">
            <img className='basis-sm max-h-full max-w-full' src="https://www.svgrepo.com/show/103269/book-cover.svg" alt="Book" />
            <ul className='flex flex-row gap-3 grow'>
                <Btn name = "Hello" url='123'/>
                <Btn name = "Hello2" url='1234'/>
                <Btn name = "Hello3" url='1235'/>
            </ul>
        </header>
    )
}