export function NoteCard() {
    return (
        <button className='bg-slate-800  text-left rounded-md p-5 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none'>
            <span className='text-small font-medium text-slate-200'>
                Há 2 dias
            </span>
            <p className='text-small leading-6 text-slate-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et dolore est voluptatum exercitationem quo quibusdam fugiat voluptates corporis quae!
            </p>

            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </button>
    )
}