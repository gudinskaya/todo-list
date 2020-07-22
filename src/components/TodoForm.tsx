import React, {useRef} from 'react'

interface todoFormProps {
	onAdd(title: string): void
} 

export const TodoForm: React.FC<todoFormProps> = (props) => {
	// const [title, setTitle] = useState('')
	const ref = useRef<HTMLInputElement>(null)
 
	// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(event.target.value)
	// }

	const keyPressHeandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			props.onAdd(ref.current!.value)
			ref.current!.value = ''
			// setTitle('')
		}
	}

    return(
       <div className="input-field mt2">
					 <input 
						// onChange={changeHandler}
						// value={title}
						ref={ref } 
						type="text" 
						id="title" 
						placeholder="пиши давай"
						onKeyPress={keyPressHeandler}
					 />
            <label htmlFor="title" className="active ">Напиши уже что-нибудь</label>
       </div>
    )
}
