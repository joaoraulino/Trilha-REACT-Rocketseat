import Logo from './assets/logo-nlw-expert.svg'
import { NoteCard } from './components/note-card'
import { NewNoteCard } from './components/new-note-card'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={Logo} alt="logo-nlw-expert" />

      <form className='w-full '>
        <input
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          type="text"
          placeholder='Busque em suas notas...'
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>

      <NewNoteCard/>

      <NoteCard/>
      <NoteCard/>
      <NoteCard/>
      <NoteCard/>
      <NoteCard/>
      <NoteCard/>
      <NoteCard/>

      </div>
    </div>
  )
}


