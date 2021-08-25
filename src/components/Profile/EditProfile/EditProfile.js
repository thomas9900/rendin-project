import { useState } from 'react'

const EditProfile = ({ onEdit }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onEdit({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)

        console.log(reminder)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default EditProfile
