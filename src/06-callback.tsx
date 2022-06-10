import React, {MouseEvent} from "react";

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert('user has been deleted')
    }
    const saveUser = () => {
        alert('user has been saved')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }


    return (
        <div><textarea onBlur={focusLostHandler} onChange={onNameChanged}>Jeka</textarea>
            <button name='delete' onClick={deleteUser}>delete</button>
        </div>
    )
}