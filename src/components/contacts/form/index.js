import { useState } from 'react';

const initalformValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
    const [form, setForm] = useState({ fullname: "", phone_number: "" });

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phone_number === "") {
            return false
        };

        addContact([...contacts, form])
        setForm(initalformValues)
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name='fullname'
                    placeholder='Fullname'
                    value={form.fullname}
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <input
                    id='phoneNumber'
                    name='phone_number'
                    placeholder='Phone number'
                    value={form.phone_number}
                    onChange={onChangeInput}
                />
            </div>
            <div className='btn'>
                <button>Add</button>
            </div>

        </form>
    );
}

export default Form
