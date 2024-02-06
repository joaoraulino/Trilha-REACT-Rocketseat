export function NewNoteCard() {
    return (
        <div className='bg-slate-700 rounded-md p-5 overflow-hidden relative'>
            <span className='text-small font-medium text-slate-200'>
                Adicionar nota
            </span>
            <p className='text-small leading-6 text-slate-400'>
                Grave uma nota em áudio que será convertida para texto automaticamente.
            </p>

        </div>
    )
}